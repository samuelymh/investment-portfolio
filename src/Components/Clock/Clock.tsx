import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const Clock: React.FC = () => {
  const setTime = (time: string) => {
    const clockValue = document.querySelector('.clockValue')!;
    clockValue.innerHTML = time;
  }


  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = [hours, minutes, seconds]
      .map(unit => String(unit).padStart(2, '0'))
    const timeString = `${time[0]} : ${time[1]} : ${time[2]}`;
    setTime(timeString);
  }, 1000);

  return (
    <div className='hidden sm:block'>
      <Tooltip placement='right' title={new Date().toDateString()}>
        <div className='flex text-black items-center font-normal'>
          <BellOutlined className='align-middle' />
          <span className='align-middle clockValue ml-1'></span>
        </div>
      </Tooltip>
    </div>
  );
};

export default Clock;