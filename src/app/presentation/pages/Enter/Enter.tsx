import { SaveOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
const Enter = () => {
  const navigate = useNavigate();
  
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate("/desktop");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2}>Enter</Title>
      <Text>Enter your name and desk number</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        // initialValues={{}}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name of Agent"
          name="agent"
          rules={[{ required: true, message: "Please input your agent!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop"
          name="desktop"
          rules={[{ required: true, message: "Please input your desktop!" }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined /> Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Enter;
