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
import Clock from './Components/Clock/Clock';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

// Helper function to create menu items.
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

// Menu items: Dashboard, Analytics, etc.
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

  return (
    <Layout>
      <Sider 
        collapsible collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        className="select-none !overflow-auto !h-screen !fixed !left-0 !inset-y-0 !z-[1]"
      >
        {/* Where app logo would go. */}
        <div className='h-8 m-4 bg-indigo-600' />

        {/* Menu items: Dashboard, Analytics, etc. */}
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          items={items} 
          onClick={(item) => setSelectedPage(item.key)}
        />
      </Sider>

      {/* Contains header, main content, and footer */}
      <Layout 
        className="site-layout"
        onClick={() => { if (!collapsed) setCollapsed(true) }}
        style={{ margin: collapsed ? "0 0 0 5rem" : "0 0 0 12.5rem",
                 transition: 'margin 0.21s', }}
      >
        {/* Start of header */}
        <Header className="!bg-[#FFFDFA] p-0 top-0 z-0 w-full text-center sticky select-none">
          <Clock />
        </Header>

        {/* Start of main content */}
        <Content>
          <MainContent selectedPage={selectedPage} />
        </Content>
        
        {/* Start of footer */}
        <Footer className='!bg-[#FFFDFA] text-center '>
          Portfolio Tracker ©2023 Created by Frederick Jorge
        </Footer>
      </Layout>

    </Layout>
  );
};

export default App;