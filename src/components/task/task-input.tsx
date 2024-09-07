import { Flex, Input } from "antd";

const TaskInput = () => {
  return (
    <Flex
      style={{
        backgroundColor: "#efefef",
        height: "60px",
        padding: "0 16px",
      }}
      gap="small"
      justify="end"
      align="center"
    >
      <Input
        type="text"
        style={{
          borderRadius: "24px",
          height: "40px",
          border: "1px solid #326db6",
        }}
      />
    </Flex>
  );
};

export default TaskInput;
