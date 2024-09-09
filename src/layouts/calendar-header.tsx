import { Layout } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const CalendarHeader = () => {
  const { Header } = Layout;

  return (
    <Header
      style={{
        backgroundColor: "var(--color-gray)",
        display: "flex",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <CalendarOutlined style={{ fontSize: "24px" }} />
      <h2>Calendar by 윤승휘</h2>
    </Header>
  );
};

export default CalendarHeader;
