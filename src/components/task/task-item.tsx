import { TaskType } from "@/types";
import { Button, Flex, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import IconCheck from "./task-item-icon-check";

const TaskItem = ({ event }: { event: TaskType }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Flex
      style={{
        border: "2px solid var(--color-gray)",
        borderRadius: "4px",
        maxWidth: "100%",
        padding: "8px",
      }}
      gap={"8px"}
      align="center"
      justify="space-between"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Flex gap={"8px"} align="center">
        {event.status === "todo" && (
          <IconCheck bgColor="var(--color-dark-gray)" />
        )}
        {event.status === "done" && <IconCheck bgColor="var(--color-green)" />}
        <span>{event.content}</span>
      </Flex>
      <Flex gap={"8px"} align="center">
        <Switch
          style={{ opacity: isHover ? 1 : 0, transition: "opacity 0.3s ease" }}
          checked={event.status === "done"}
          onChange={(checked) => {
            console.log(checked);
            //checked ? event.status === "done" : "todo"; 변경
          }}
        />
        <Button
          type="text"
          shape="circle"
          icon={<DeleteOutlined />}
          style={{ opacity: isHover ? 1 : 0, transition: "opacity 0.3s ease" }}
        />
      </Flex>
    </Flex>
  );
};

export default TaskItem;
