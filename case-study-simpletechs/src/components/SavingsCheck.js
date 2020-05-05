import React from 'react';

const SavingsCheck = ({ handleSavingsChange, checkSavings, savingsVal }) => {
  return (
    <div>
      <input type='number' onChange={handleSavingsChange} value={savingsVal} />
      <button onClick={checkSavings}>check savings</button>
    </div>
  );
};

export default SavingsCheck;
