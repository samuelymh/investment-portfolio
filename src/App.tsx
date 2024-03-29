import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  BarChartOutlined,
  WalletOutlined,

} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import Dashboard from './Pages/Dashboard/Dashboard';
import Analytics from './Pages/Analytics/Analytics';
import Transactions from './Pages/Transactions/Transactions';
import Clock from './Components/Clock/Clock';
import Profile from './Components/Profile/Profile';

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

const MainContent: React.FC<{ selectedPage: string, className: string }> = ({ selectedPage, className }) => {
  console.log(selectedPage);
  switch (selectedPage) {
    case '1':
      return <Dashboard classes={className} />;
    case '2':
      return <Analytics classes={className} />;
    case '3':
      return <Transactions classes={className} />;
    default:
      return <Dashboard classes={className} />;
  }
}

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('1');

  return (
    <Layout>
      <Sider className="select-none !overflow-auto !h-screen !fixed !left-0 !inset-y-0 !z-[1]">
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
      <Layout className="site-layout my-0 mr-0 ml-[12.5rem]">
        {/* Start of header */}
        <Header className="flex justify-evenly sm:justify-between !bg-[#FFFDFA] p-0 top-0 z-0 w-full text-center sticky select-none text-xl">
          <Clock />
          <Profile />
        </Header>

        {/* Start of main content */}
        <Content>
          <MainContent
            selectedPage={selectedPage}
            className="!bg-[#FFFDFA] text-lg"
          />
        </Content>

        {/* Start of footer */}
        <Footer className='!bg-[#FFFDFA] text-center '>
          Portfolio Tracker ©2023 Created by Samuel Yau
        </Footer>
      </Layout>

    </Layout>
  );
};

export default App;