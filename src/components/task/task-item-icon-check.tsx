import { CheckOutlined } from "@ant-design/icons";
import { Flex } from "antd";

const IconCheck = ({ bgColor }: { bgColor: string }) => {
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        backgroundColor: bgColor,
        padding: "4px",
        borderRadius: "50%",
      }}
    >
      <CheckOutlined style={{ fontSize: "12px", color: "white" }} />
    </Flex>
  );
};

export default IconCheck;
