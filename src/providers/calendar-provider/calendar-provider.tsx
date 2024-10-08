import { getTasks } from "@/mocks";
import { TaskType, ViewMode } from "@/types";
import { isEqual } from "@/utils";
import dayjs from "dayjs";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface CalendarContextInterface {
  allEvents: TaskType[];
  currentEvents: TaskType[];
  updateDB: () => void;
  currentDate: dayjs.Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  hoverEvents: TaskType[];
  setHoverEvents: React.Dispatch<React.SetStateAction<TaskType[]>>;
  tasksByStatus: TaskType[];
  setTaskViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  taskViewMode: ViewMode;
}

export const CalendarContext = createContext<CalendarContextInterface>({
  allEvents: [],
  currentEvents: [],
  updateDB: () => null,
  currentDate: dayjs(),
  setCurrentDate: () => null,
  hoverEvents: [],
  setHoverEvents: () => null,
  tasksByStatus: [],
  setTaskViewMode: () => null,
  taskViewMode: "all",
});

export const CalendarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [taskViewMode, setTaskViewMode] = useState<ViewMode>("all");
  const [hoverEvents, setHoverEvents] = useState<TaskType[]>([]);
  const [allEvents, setAllEvents] = useState<TaskType[]>([]);
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());
  const [firstRender, setFirstRender] = useState(false);

  const currentEvents = useMemo(() => {
    return allEvents.filter((event) => isEqual(event, currentDate));
  }, [allEvents, currentDate]);

  const updateDB = useCallback(() => {
    getTasks().then((data) => {
      setAllEvents([...data.data]);
    });
    setFirstRender(true);
  }, []);

  const tasksByStatus = useMemo(() => {
    if (taskViewMode === "all") return currentEvents;
    return currentEvents.filter((event) => event.status === taskViewMode);
  }, [currentEvents, taskViewMode]);

  const value = useMemo(() => {
    return {
      currentDate,
      setCurrentDate,
      allEvents,
      currentEvents,
      updateDB,
      hoverEvents,
      setHoverEvents,
      tasksByStatus,
      setTaskViewMode,
      taskViewMode,
    };
  }, [
    allEvents,
    currentDate,
    currentEvents,
    hoverEvents,
    tasksByStatus,
    updateDB,
    taskViewMode,
  ]);

  useEffect(() => {
    if (firstRender) return;
    updateDB();
  }, [firstRender, updateDB, value]);

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
