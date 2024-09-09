import { CalendarContext } from "@/providers";
import { Badge, Flex } from "antd";
import { useContext } from "react";
import { TaskNoList } from "@/components";

const CalendarPreview = () => {
  const { hoverEvents } = useContext(CalendarContext);

  return (
    <Flex
      flex={1}
      style={{
        width: "100%",
        padding: "6px 8px",
        height: "100%",
        overflowY: "auto",
        backgroundColor: "white",
      }}
      vertical
      gap={"4px"}
    >
      <span style={{ fontSize: "16px", fontWeight: 700 }}>Preview</span>
      {hoverEvents.length > 0 ? (
        hoverEvents.map((v) => {
          return (
            <Flex
              key={v.id}
              style={{
                width: "100%",
                padding: "4px 8px",
                borderRadius: "4px",
                border: "2px solid var(--color-gray)",
              }}
              gap={"8px"}
            >
              <Badge color={v.status === "done" ? "green" : "volcano"} />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {v.content}
              </span>
            </Flex>
          );
        })
      ) : (
        <Flex
          justify="center"
          align="center"
          style={{
            height: "100%",
          }}
        >
          <TaskNoList />
        </Flex>
      )}
    </Flex>
  );
};

export default CalendarPreview;
