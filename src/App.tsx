import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  BarChartOutlined,
  WalletOutlined,

} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import Dashboard from './Components/Dashboard/Dashboard';
import Analytics from './Components/Analytics/Analytics';
import Transactions from './Components/Transactions/Transactions';

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

const MainContent: React.FC< { selectedPage: string } > = ({ selectedPage }) => {
  console.log(selectedPage);
  switch (selectedPage) {
    case '1':
      return <Dashboard />;
    case '2':
      return <Analytics />;
    case '3':
      return <Transactions />;
    default:
      return <Dashboard />;
  }
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPage, setSelectedPage] = useState('1');

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

  // Content style when collapsed and expanded.
  const styleContentCollapsed: React.CSSProperties = {
    margin: '0 0 0 5rem',
    transition: 'margin 0.2s',
  }
  const styleContentExpanded: React.CSSProperties = {
    margin: '0 0 0 12.5rem',
    transition: 'margin 0.2s',
  }

  return (
    <Layout style={{ minHeight: '100vh' }} className="select-none">
      <Sider 
        collapsible collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        style={styleSider}
      >
        {/* Where app logo would go. */}
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Menu items: Dashboard, Analytics, etc. */}
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          items={items} 
          onClick={(item) => setSelectedPage(item.key)}
        />
      </Sider>

      <Layout className="site-layout select-none">
        {/* Start of header */}
        <Header style={styleHeader} >
          Portfolio Tracker ©2023 Created by Frederick Jorge
        </Header>

        {/* Start of main content */}
        <Content style={collapsed ? styleContentCollapsed : styleContentExpanded} >
          <MainContent selectedPage={selectedPage} />
        </Content>
        
        {/* Start of footer */}
        <Footer style={{ textAlign: 'center', background: "orange" }}>
          Portfolio Tracker ©2023 Created by Frederick Jorge
        </Footer>
      </Layout>

    </Layout>
  );
};

export default App;