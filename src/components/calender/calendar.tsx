import { CalendarContext, ModalContext } from "@/providers";
import { Calendar as _Calendar } from "antd";
import { useContext } from "react";
import CellRender from "../../layouts/calendar-cell-render";

const Calendar = () => {
  const { setCurrentDate, currentDate } = useContext(CalendarContext);
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <_Calendar
      onPanelChange={(e) => {
        setCurrentDate(e);
      }}
      onSelect={(e, selectedInfo) => {
        if (selectedInfo.source === "date") {
          setIsModalOpen(true);
        }
        setCurrentDate(e);
      }}
      cellRender={(date, info) => <CellRender current={date} info={info} />}
      className={"big-calendar-weekdays"}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      value={currentDate}
    />
  );
};

export default Calendar;
