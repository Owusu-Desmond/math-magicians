import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculation, setCalculation] = useState({ total: null, next: null, operation: null });

  const handleClick = (e) => {
    const buttonName = e.currentTarget.textContent;
    const newState = calculate(calculation, buttonName);
    setCalculation(newState);
  };

  const { total, next, operation } = calculation;
  return (
    <div className="Calculator-container">
      <div className="Calculator-answer">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{!next && !operation && !total ? 0 : next}</span>
      </div>
      <div className="Calculator-inputs-row row-1">
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button type="button" onClick={handleClick}>÷</button>
      </div>
      <div className="Calculator-inputs-row row-2">
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button type="button" onClick={handleClick}>x</button>
      </div>
      <div className="Calculator-inputs-row row-3">
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button type="button" onClick={handleClick}>-</button>
      </div>
      <div className="Calculator-inputs-row row-4">
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button type="button" onClick={handleClick}>+</button>
      </div>
      <div className="Calculator-inputs-row row-5">
        <button type="button" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
