import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Image, Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { useState } from 'react';

export async function getStaticProps() {
  const randomImage = "https://random.imagecdn.app/600/200";
  return {
    props: {
      randomImage
    }
  }
}

const Homepage = ({ randomImage }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const handleCollapsed = () => setCollapsed(!collapsed);
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
          <div style={{ height: "32px", margin: '16px', background: 'rgba(255, 255, 255, 0.3)' }} />
          <Menu>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ background: '#fff' }}>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>ReactJs + NextJs + Ant Design</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ margin: "0 10vh" }}>
              <Image width="80vw" src={randomImage} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ReactJs + NextJs + Ant Design | Created by Tamir Faria © 2022
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Homepage;
