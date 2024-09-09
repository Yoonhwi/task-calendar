import { deleteTask, updateTask } from "@/mocks";
import { TaskType } from "@/types";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Flex, Switch } from "antd";
import { useCallback, useContext, useState } from "react";
import IconCheck from "./task-item-icon-check";
import { CalendarContext } from "@/providers";

const TaskItem = ({ event }: { event: TaskType }) => {
  const [isHover, setIsHover] = useState(false);
  const { updateDB } = useContext(CalendarContext);

  const handleChangeStatus = useCallback(
    async (checked: boolean) => {
      await updateTask({ ...event, status: checked ? "done" : "todo" });
      updateDB();
    },
    [event, updateDB]
  );

  const handleDeleteBtn = useCallback(
    async (id: string) => {
      await deleteTask({ id });
      updateDB();
    },
    [updateDB]
  );

  return (
    <Flex
      style={{
        border: "2px solid var(--color-gray)",
        borderRadius: "4px",
        maxWidth: "100%",
        padding: "4px 12px",
      }}
      gap={"8px"}
      align="center"
      justify="space-between"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Flex gap={"12px"} align="center">
        {event.status === "todo" && (
          <IconCheck bgColor="var(--color-dark-gray)" />
        )}
        {event.status === "done" && <IconCheck bgColor="var(--color-green)" />}
        <span style={{ fontSize: "14px", fontWeight: 600 }}>
          {event.content}
        </span>
      </Flex>
      <Flex gap={"8px"} align="center">
        <Switch
          style={{ opacity: isHover ? 1 : 0, transition: "opacity 0.3s ease" }}
          checked={event.status === "done"}
          onChange={(checked) => handleChangeStatus(checked)}
        />
        <Button
          type="text"
          shape="circle"
          icon={<DeleteOutlined />}
          style={{ opacity: isHover ? 1 : 0, transition: "opacity 0.3s ease" }}
          onClick={() => handleDeleteBtn(event.id)}
        />
      </Flex>
    </Flex>
  );
};

export default TaskItem;
