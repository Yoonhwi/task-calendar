import { CalendarContext } from "@/providers";
import { Flex } from "antd";
import { useContext } from "react";
import "@/App.css";

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
      <Flex
        style={{
          borderRadius: "20px",
          backgroundColor: "var(--color-blue)",
          color: "white",
          gap: "4px",
          padding: "2px",
          paddingLeft: "8px",
        }}
      >
        <span>tasks</span>
        <span
          style={{
            width: "23px",
            height: "23px",
            borderRadius: "50%",
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          {todo.length}
        </span>
      </Flex>
      <Flex
        style={{
          borderRadius: "20px",
          backgroundColor: "var(--color-blue)",
          color: "white",
          gap: "4px",
          padding: "2px",
          paddingLeft: "8px",
        }}
      >
        <span>tasks done</span>
        <span
          style={{
            width: "23px",
            height: "23px",
            borderRadius: "50%",
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          {done.length}
        </span>
      </Flex>
    </Flex>
  );
};

export default TaskListHeader;
