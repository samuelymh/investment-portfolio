import React from 'react';
import PortfolioChart from '../PortfolioChart/PortfolioChart';

import {
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

const Dashboard: React.FC<{ classes: string }> = ({ classes }) => {

  const classNameContainer = "box-border border-black border-2 p-3 w-1/5 min-w-[300px]";

  return (
    <div className={classes}>
      <h1 className='text-center'>Dashboard</h1><br />

      <div className='flex flex-wrap justify-around px-20'>
        {/* Displays NLV and total invested. */}
        <div className={classNameContainer}>
          <p className='text-base'>Value</p>
          <p className='text-xl font-medium'>$167,245.32</p>
          <p className="text-lg">$132,784.52 invested</p>
        </div>

        {/* Displays cash remaining in both number and percentage. */}
        <div className={classNameContainer}>
          <p className='text-base'>Cash Remaining</p>
          <p className='text-xl font-medium'>$34,460.80</p>
          <p className='text-lg'>20.60% unallocated</p>
        </div>

        {/* Displays YTD and day's returns in number and percentage.*/}
        <div className={classNameContainer}>
          <p className='text-base'>Returns</p>
          <p className='text-xl font-medium'>
            +$23,042
            <span className='text-base text-green-600'>
              <CaretUpOutlined className='align-middle pb-1' />
              17.5%
            </span>
          </p>
          <p className='text-lg'>
            -$1,328
            <span className='text-base text-red-600'>
              <CaretDownOutlined className='align-middle pb-1' />
              0.8%
            </span>
          </p>
        </div>

        {/* Displays yield(%) relative to total invested and in number.*/}
        <div className={classNameContainer}>
          <p className='text-base'>Dividends</p>
          <p className='text-xl font-medium'>
            1.8%
            <span className='text-base text-green-600'>
              <CaretUpOutlined className='align-middle pb-1' />
              0.2%
            </span>
          </p>
          <p className='text-lg'>$2,384.32</p>
        </div>
      </div>
      <br />

      {/* Portfolio allocation displayed in donut chart */}
      <PortfolioChart />

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
    </div>
  );
};

export default Dashboard;