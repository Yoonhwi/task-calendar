import { CalendarContext } from "@/providers";
import { ViewMode } from "@/types";
import { Flex } from "antd";
import { useCallback, useContext } from "react";

const TaskListHeaderTag = ({
  status,
  length,
}: {
  status: ViewMode;
  length: number;
}) => {
  const { setTaskViewMode, taskViewMode } = useContext(CalendarContext);

  const handleTaskViewMode = useCallback(
    (status: ViewMode) => {
      setTaskViewMode(status);
    },
    [setTaskViewMode]
  );

  return (
    <Flex
      style={{
        borderRadius: "20px",
        backgroundColor: taskViewMode === status ? "var(--color-blue)" : "gray",
        color: "white",
        gap: "4px",
        padding: "2px",
        paddingLeft: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={() => handleTaskViewMode(status)}
    >
      <span>{status}</span>
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
        {length}
      </span>
    </Flex>
  );
};

export default TaskListHeaderTag;
