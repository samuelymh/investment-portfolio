import React from 'react';

// Ant Design components
import { Select, Dropdown, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from "@ant-design/icons";

const Profile: React.FC = () => {
  // TODO: Implement handleChange function
  // Updates page to display data of selected portfolio
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Settings",
      icon: <SettingOutlined />,
      onClick: () => goSettings(),
    },
    {
      key: "2",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: () => goLogout(),
    }
  ];

  // TODO: Implement goSettings and goLogout functions
  // Updates page to display settings
  const goSettings = () => {
    console.log('Settings');
  };

  // Logs out user and redirects to login page
  const goLogout = () => {
    console.log('Logout');
  };

  return (
    <div className='h-full flex items-center'>
      {/* Dropdown to select portfolio */}
      <Select
        className='mr-2 !w-32 align-middle'
        defaultValue="Portfolio 1"
        options={[{ value: 'portfolio1', label: 'Portfolio 1'},
                  { value: 'portfolio2', label: 'Portfolio 2'}]}
        onChange={handleChange}
      />

      <div>
        {/* Dropdown to access settings and logout button */}
        <Dropdown menu={{ items }}>
          <Avatar
            className='flex justify-center items-center'
            size="large" 
            icon={<UserOutlined />} 
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default Profile;