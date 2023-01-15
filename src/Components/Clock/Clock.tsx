import React from 'react';
import { BellOutlined } from '@ant-design/icons';

const Clock: React.FC = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-black inline-block h-full text-base font-normal'>
      <BellOutlined className='align-middle'/>  
      <span className='align-middle'> {time}</span>
    </div>
  );
};

export default Clock;