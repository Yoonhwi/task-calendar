import { Empty, Flex } from "antd";

const TaskNoList = () => {
  return (
    <Flex justify="center" align="center" style={{ height: "160px" }}>
      <Empty description={<span>일정이 없습니다!</span>} />
    </Flex>
  );
};

export default TaskNoList;
