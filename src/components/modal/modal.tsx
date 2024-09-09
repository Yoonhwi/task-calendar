import { CalendarContext, ModalContext } from "@/providers";
import { Modal as _Modal } from "antd";
import { useContext } from "react";
import { TaskList } from "@/components";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { setTaskViewMode } = useContext(CalendarContext);
  return (
    <_Modal
      open={isModalOpen}
      onCancel={() => {
        setIsModalOpen(false);
        setTaskViewMode("all");
      }}
      footer={null}
      closable={false}
    >
      <TaskList />
    </_Modal>
  );
};

export default Modal;
