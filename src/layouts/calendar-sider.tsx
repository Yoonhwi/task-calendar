import { CalendarPreview } from "@/components";
import { CalendarContext, ModalContext } from "@/providers";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Calendar, Flex, Layout } from "antd";
import { useCallback, useContext } from "react";

const CalendarSider = () => {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const { Sider } = Layout;

  const handlePrevMonth = useCallback(() => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  }, [currentDate, setCurrentDate]);

  const handleNextMonth = useCallback(() => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  }, [currentDate, setCurrentDate]);

  return (
    <Sider
      width="20%"
      style={{
        backgroundColor: "var(--color-gray)",
        height: "100%",
        boxSizing: "border-box",
        paddingRight: "8px",
      }}
    >
      <Flex
        flex={1}
        gap={"8px"}
        vertical
        style={{
          height: "100%",
        }}
      >
        <Calendar
          fullscreen={false}
          style={{
            borderRadius: "0px",
          }}
          onPanelChange={(e) => {
            setCurrentDate(e);
          }}
          onSelect={(e, selectedInfo) => {
            if (selectedInfo.source === "date") {
              setIsModalOpen(true);
            }
            setCurrentDate(e);
          }}
          defaultValue={undefined}
          value={currentDate}
          className={"small-calendar-weekdays"}
          headerRender={() => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "40px",
                  padding: "12px",
                }}
              >
                <Button onClick={handlePrevMonth} type="text">
                  <LeftOutlined />
                </Button>
                <span>{currentDate.format("YYYY-MMMM")}</span>
                <Button onClick={handleNextMonth} type="text">
                  <RightOutlined />
                </Button>
              </div>
            );
          }}
        />
        <CalendarPreview />
      </Flex>
    </Sider>
  );
};

export default CalendarSider;
