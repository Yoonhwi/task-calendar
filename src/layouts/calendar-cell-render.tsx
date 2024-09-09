import { CalendarContext } from "@/providers";
import { TaskType } from "@/types";
import { isEqual } from "@/utils";
import { Badge, Flex } from "antd";
import { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import { useCallback, useContext } from "react";
interface CellRenderProps {
  current: Dayjs;
  info: CellRenderInfo<Dayjs>;
}

const CellRender = ({ current, info }: CellRenderProps) => {
  const { allEvents, setHoverEvents } = useContext(CalendarContext);

  const handleCellHover = useCallback(
    (events: TaskType[]) => {
      setHoverEvents(events);
    },
    [setHoverEvents]
  );

  const handleCellLeave = useCallback(() => {
    setHoverEvents([]);
  }, [setHoverEvents]);

  if (info.type === "date") {
    const currentEvents = allEvents.filter((event) => isEqual(event, current));
    const done = currentEvents.filter((event) => event.status === "done");
    const todo = currentEvents.filter((event) => event.status === "todo");

    return (
      <Flex
        vertical
        style={{ height: "100%" }}
        onMouseEnter={() => handleCellHover(currentEvents)}
        onMouseLeave={() => handleCellLeave}
      >
        <Flex gap={"4px"} wrap>
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
