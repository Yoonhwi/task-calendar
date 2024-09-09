import "@/App.css";
import { CalendarContext } from "@/providers";
import { Flex } from "antd";
import { useContext } from "react";
import TaskListHeaderTag from "./task-list-header-tag";

const TaskListHeader = () => {
  const { currentEvents } = useContext(CalendarContext);
  const todo = currentEvents.filter((event) => event.status === "todo");
  const done = currentEvents.filter((event) => event.status === "done");

  return (
    <Flex
      style={{
        backgroundColor: "var(--color-gray)",
        height: "50px",
        padding: "0 16px",
      }}
      gap="small"
      justify="end"
      align="center"
    >
      <TaskListHeaderTag status="all" length={currentEvents.length} />
      <TaskListHeaderTag status="todo" length={todo.length} />
      <TaskListHeaderTag status="done" length={done.length} />
    </Flex>
  );
};

export default TaskListHeader;
