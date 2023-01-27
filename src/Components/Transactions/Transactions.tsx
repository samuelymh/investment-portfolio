import React from 'react';

const Transactions: React.FC<{ classes: string }> = ({ classes })=> {
  return (
    <div className={classes}>
      <h1 className='text-center' >Transactions</h1>
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

export default Transactions;