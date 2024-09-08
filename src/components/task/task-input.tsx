import { Button, Flex, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const TaskInput = () => {
  return (
    <Flex
      style={{
        backgroundColor: "var(--color-gray)",
        height: "60px",
        padding: "0 16px",
        position: "relative",
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
          border: "1px solid var(--color-blue)",
        }}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </Flex>
  );
};

export default TaskInput;
