import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className='text-center' >Dashboard</h1>
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