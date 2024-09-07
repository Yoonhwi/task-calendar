import { TaskType } from "@/types";
import { Flex } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const TaskItem = ({ event }: { event: TaskType }) => {
  return (
    <Flex
      style={{
        border: "2px solid #efefef",
        borderRadius: "4px",
        maxWidth: "100%",
        padding: "8px",
      }}
      gap={"8px"}
    >
      <CheckCircleOutlined style={{ fontSize: "16px" }} />
      <CheckCircleOutlined style={{ fontSize: "16px", color: "green" }} />
      <span>{event.content}</span>
    </Flex>
  );
};

export default TaskItem;
