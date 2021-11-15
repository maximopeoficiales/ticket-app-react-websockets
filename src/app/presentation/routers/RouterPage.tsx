import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  PlusOutlined,
  CheckSquareOutlined,
  EnterOutlined,
} from "@ant-design/icons";

import Enter from "../pages/Enter/Enter";
import Queue from "../pages/Queue/Queue";
import CreateTicket from "../pages/CreateTicket/CreateTicket";
import Desktop from "../pages/Desktop/Desktop";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<EnterOutlined />}>
              <Link to="/enter">Enter</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CheckSquareOutlined />}>
              <Link to="/queue">Queue</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PlusOutlined />}>
              <Link to="/create-ticket">Create Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/enter" element={<Enter />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/create-ticket" element={<CreateTicket />} />
              <Route path="/desktop" element={<Desktop />} />
              <Route path="*" element={<Navigate to="/enter" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
