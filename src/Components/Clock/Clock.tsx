import React from 'react';
import { BellOutlined } from '@ant-design/icons';

import data from './data.json';

const Clock: React.FC = () => {

  const setTime = (time: string) => {
    const clockValue = document.querySelector('.clockValue')!;
    clockValue.innerHTML = time;
  }

  const printData = () => {
    let countdownDate = new Date(data[2023][2]).getTime();
    let distance = countdownDate - new Date().getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(days + "D " + hours + "H " + minutes + "M " + seconds + "S")
    
  }

  const updateClock = setInterval(() => {
    const countdownDate = new Date(data[2023][2]).getTime();
    const distance = countdownDate - new Date().getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const time = [days, hours, minutes, seconds]
      .map(unit => unit.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}))

    // If countdown not finished, update the clock.
    if (seconds >= 0) {
      setTime(time[0] + ' : ' + time[1] + " : " + time[2] + " : " + time[3])
    }

    // If countdown finished, convert to text.
    if (distance < 0) {
      clearInterval(updateClock);
      setTime('Countdown finished');
    }
  }, 1000);

  return (
    <div 
      className='text-black inline-block h-full text-base font-normal'
      onClick={() => printData()}>
      <BellOutlined className='align-middle'/>  
      <span className='align-middle clockValue ml-1'></span>
    </div>
  );
};

export default Clock;