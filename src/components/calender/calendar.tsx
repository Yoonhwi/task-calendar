import { CalendarContext, ModalContext } from "@/providers";
import { Calendar as _Calendar } from "antd";
import { useContext } from "react";
import CellRender from "./calendar-cell-render";

const Calendar = () => {
  const { setCurrentDate } = useContext(CalendarContext);
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        <_Calendar
          onPanelChange={() => {
            setCurrentDate(null);
          }}
          onSelect={(e, selectedInfo) => {
            if (selectedInfo.source === "date") {
              setIsModalOpen(true);
            }
            const selectedDate = e.format("YYYY-MM-DD");
            setCurrentDate(selectedDate);
          }}
          cellRender={(date, info) => <CellRender current={date} info={info} />}
        />
      </div>
    </div>
  );
};

export default Calendar;
