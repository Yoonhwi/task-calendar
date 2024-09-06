import { CalendarContext, ModalContext } from "@/providers";
import { Flex, Calendar as _Calendar } from "antd";
import { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import { useContext } from "react";

interface DataType {
  id: number;
  date: string;
  content: string;
  startTime: number;
  endTime: number;
}

const dummyData: DataType[] = [
  { id: 0, date: "2024-09-05", content: "회의", startTime: 10, endTime: 11 },
  {
    id: 1,
    date: "2024-09-10",
    content: "프로젝트 마감",
    startTime: 10,
    endTime: 11,
  },
  { id: 2, date: "2024-09-15", content: "휴가", startTime: 10, endTime: 11 },
];

const Calendar = () => {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);
  const { setIsModalOpen } = useContext(ModalContext);

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") {
      const date = current.format("YYYY-MM-DD");
      const currentEvents = dummyData.filter((event) => event.date === date);

      return (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {currentEvents.map((event, index) => (
            <li key={index}>
              <Flex gap={4}>
                <span>{`${event.startTime} ~ ${event.endTime}시`}</span>
                <span>{event.content}</span>
              </Flex>
            </li>
          ))}
        </ul>
      );
    }
    return info.originNode;
  };

  console.log("changed", currentDate);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        <_Calendar
          onPanelChange={(e) => console.log(e, "onPanelChange")}
          onSelect={(e) => {
            const date = e.format("YYYY-MM-DD");
            setCurrentDate(date);
            setIsModalOpen(true);
          }}
          cellRender={cellRender}
        />
      </div>
    </div>
  );
};

export default Calendar;
