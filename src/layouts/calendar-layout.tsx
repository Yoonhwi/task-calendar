import { Layout } from "antd";
import CalendarHeader from "./calendar-header";
import CalendarSider from "./calendar-sider";

interface CalendarLayoutProps {
  children: React.ReactNode;
}

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  const { Content } = Layout;

  return (
    <Layout style={{ overflow: "hidden", height: "100vh", padding: "20px" }}>
      <CalendarHeader />
      <Layout style={{ borderTop: "2px solid white", overflow: "hidden" }}>
        <CalendarSider />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default CalendarLayout;
