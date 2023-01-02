import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  BarChartOutlined,
  WalletOutlined,

} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <BarChartOutlined />),
  getItem('Analytics', '2', <DesktopOutlined />),
  getItem('Transactions', '3', <WalletOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Sider style to prevent it from scrolling with the content.
  const styleSider: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  }

  // Header style to prevent it from scrolling with the content.
  const styleHeader: React.CSSProperties = {
    padding: 0,
    background: "orange",
    position: 'sticky', 
    top: 0, 
    zIndex: 0,
    width: '100%',
    textAlign: 'center',
  }

  // Content style
  const styleContent: React.CSSProperties = {
    margin: '0',
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        style={styleSider}
      >
        {/* Where app logo would go. */}
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Menu items: Dashboard, Analytics, etc. */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout className="site-layout">
        {/* Start of header */}
        <Header style={styleHeader} >
        Portfolio Tracker ©2023 Created by Frederick Jorge
        </Header>

        {/* Start of main content */}
        <Content style={styleContent}>

          {/* Testing filler content */}
          <div style={{ padding: 24, textAlign: 'center', background: "pink" }}>
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        
        {/* Start of footer */}
        <Footer style={{ textAlign: 'center', background: "orange" }}>Portfolio Tracker ©2023 Created by Frederick Jorge</Footer>
      </Layout>

    </Layout>
  );
};

export default App;