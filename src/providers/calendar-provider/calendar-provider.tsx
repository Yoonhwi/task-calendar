import { TaskType } from "@/types";
import { createContext, ReactNode } from "react";
import { useState } from "react";

interface CalendarContextInterface {
  currentDate: string | null;
  setCurrentDate: React.Dispatch<React.SetStateAction<string | null>>;
  allEvents: TaskType[];
  currentEvents: TaskType[];
}

const allEvents: TaskType[] = [
  {
    id: 0,
    date: "2024-09-05",
    content: "회의",
    status: "todo",
  },
  {
    id: 1,
    date: "2024-09-10",
    content: "프로젝트 마감",
    status: "todo",
  },
  {
    id: 2,
    date: "2024-09-15",
    content: "휴가",
    status: "todo",
  },
  {
    id: 3,
    date: "2024-09-15",
    content: "test",
    status: "todo",
  },
  {
    id: 4,
    date: "2024-09-15",
    content: "test",
    status: "done",
  },
];

export const CalendarContext = createContext<CalendarContextInterface>({
  currentDate: null,
  setCurrentDate: () => null,
  allEvents: [],
  currentEvents: [],
});

export const CalendarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const currentEvents = allEvents.filter((event) => event.date === currentDate);

  const value = { currentDate, setCurrentDate, allEvents, currentEvents };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
