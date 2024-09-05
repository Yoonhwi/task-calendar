import { Calendar, Flex } from "antd";
import "./App.css";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";

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

function App() {
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
        <Calendar
          onPanelChange={(e) => console.log(e, "onPanelChange")}
          onSelect={(e) => console.log(e, "onSelect")}
          cellRender={cellRender}
        />
      </div>
    </div>
  );
}

export default App;
