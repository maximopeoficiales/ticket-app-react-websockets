import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
const { Text, Title } = Typography;

const Desktop = () => {
  const close = () => {
    console.log("close");
  };
  const nextTicket = () => {
    console.log("LLamada a socket server");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Maximo</Title>
          <Text>You are working at the desk: </Text>
          <Text type={"success"}>5</Text>
        </Col>
        <Col span={4}>
          <Button shape="round" type="primary" onClick={close}>
            <CloseCircleOutlined />
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col span={20}>
          <Text>Is answering the number: </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }} type="danger">
            66
          </Text>
        </Col>
        <Col span={4}>
          <Button
            icon={<RightOutlined />}
            onClick={nextTicket}
            shape="round"
            type="primary"
            danger
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
