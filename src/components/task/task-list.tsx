import { CalendarContext } from "@/providers";
import { Flex } from "antd";
import { useContext } from "react";
import TaskInput from "./task-input";
import TaskItem from "./task-item";
import TaskListHeader from "./task-list-header";
import TaskNoList from "./task-no-list";
import { getTasks } from "@/mocks";

const TaskList = () => {
  const { currentEvents } = useContext(CalendarContext);
  getTasks()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return (
    <Flex vertical={true}>
      <TaskListHeader />
      <Flex vertical={true} gap={"4px"} style={{ padding: "16px" }}>
        {currentEvents.map((event, index) => (
          <TaskItem key={index} event={event} />
        ))}
      </Flex>
      {currentEvents.length === 0 && <TaskNoList />}
      <TaskInput />
    </Flex>
  );
};

export default TaskList;
