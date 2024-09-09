import { Empty, Flex } from "antd";

const TaskNoList = ({ text }: { text: string }) => {
  return (
    <Flex justify="center" align="center" style={{ height: "160px" }}>
      <Empty description={<span>{text}</span>} />
    </Flex>
  );
};

export default TaskNoList;
