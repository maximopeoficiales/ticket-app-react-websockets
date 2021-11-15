import { SaveOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber } from "antd";

const Enter = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
  );
};

export default Enter;
