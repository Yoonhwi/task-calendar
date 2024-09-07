import { Flex } from "antd";

const TaskNoList = () => {
  return (
    <Flex justify="center" align="center" style={{ height: "120px" }}>
      <span>No task for today</span>
    </Flex>
  );
};

export default TaskNoList;
