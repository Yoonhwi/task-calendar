import { Button, Flex, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CalendarContext } from "@/providers";
import { useCallback, useContext, useRef, useState } from "react";
import { postTask } from "@/mocks";

const TaskInput = () => {
  const [inputText, setInputText] = useState("");
  const { currentDate, updateDB } = useContext(CalendarContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePressEnter = useCallback(() => {
    if (!buttonRef.current) return;
    buttonRef.current.click();
  }, []);

  const handleAddTask = useCallback(async () => {
    if (!inputText || !currentDate) return;
    await postTask({
      content: inputText,
      date: currentDate.format("YYYY-MM-DD"),
    });
    updateDB();
    setInputText("");
  }, [currentDate, inputText, updateDB]);

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
        onChange={(e) => setInputText(e.target.value)}
        onPressEnter={handlePressEnter}
        value={inputText}
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
        ref={buttonRef}
        onClick={handleAddTask}
      />
    </Flex>
  );
};

export default TaskInput;
