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
    let countdownDate = new Date(data[2023][2]).getTime();
    let distance = countdownDate - new Date().getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result in clock element
    // If multiple days, display days.
    // Else if multiple hours, display HH:MM:SS.
    if (days > 0) {
      setTime(days + " days till next market holiday");
    } else if (hours > 0) {
      setTime(hours + "H " + minutes + "M " + seconds + "S");
    } else if (minutes > 0) {
      setTime(minutes + "M " + seconds + "S");
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
      <span className='align-middle clockValue'></span>
    </div>
  );
};

export default Clock;