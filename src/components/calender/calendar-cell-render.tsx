import { CalendarContext } from "@/providers";
import { Flex } from "antd";
import { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import { useContext } from "react";
interface CellRenderProps {
  current: Dayjs;
  info: CellRenderInfo<Dayjs>;
}

const CellRender = ({ current, info }: CellRenderProps) => {
  const { allEvents } = useContext(CalendarContext);

  if (info.type === "date") {
    const date = current.format("YYYY-MM-DD");
    const currentEvents = allEvents.filter((event) => event.date === date);

    return (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentEvents.map((event, index) => (
          <li key={index}>
            <Flex gap={4}>
              <span>{event.content}</span>
            </Flex>
          </li>
        ))}
      </ul>
    );
  }
  return info.originNode;
};

export default CellRender;
