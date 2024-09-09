import { CalendarContext } from "@/providers";
import { Flex } from "antd";
import { useContext } from "react";
import TaskInput from "./task-input";
import TaskItem from "./task-item";
import TaskListHeader from "./task-list-header";
import { TaskNoList } from "@/components";

const TaskList = () => {
  const { tasksByStatus, currentEvents } = useContext(CalendarContext);

  return (
    <Flex vertical={true}>
      <TaskListHeader />
      {currentEvents.length > 0 ? (
        <Flex vertical={true} gap={"4px"} style={{ padding: "16px" }}>
          {tasksByStatus.length > 0 ? (
            tasksByStatus.map((event, index) => (
              <TaskItem key={index} event={event} />
            ))
          ) : (
            <TaskNoList text="해당 상태의 일정은 없습니다." />
          )}
        </Flex>
      ) : (
        <TaskNoList text="일정을 추가 해주세요!" />
      )}

      <TaskInput />
    </Flex>
  );
};

export default TaskList;
