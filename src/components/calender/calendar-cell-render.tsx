import { CalendarContext } from "@/providers";
import { Badge, Flex } from "antd";
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
    const done = currentEvents.filter((event) => event.status === "done");
    const todo = currentEvents.filter((event) => event.status === "todo");

    return (
      <Flex vertical>
        <Flex gap={"4px"}>
          {todo.map((_, i) => {
            return <Badge key={`badge_${i}`} color={"volcano"} />;
          })}
        </Flex>
        <Flex gap={"4px"}>
          {done.map((_, i) => {
            return <Badge key={`badge_${i}`} color={"green"} />;
          })}
        </Flex>
      </Flex>
    );
  }
  return info.originNode;
};

export default CellRender;
