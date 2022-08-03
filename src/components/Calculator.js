import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="Calculator-container">
        <div className="Calculator-answer">0</div>
        <div className="Calculator-inputs-row row-1">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">&#247;</button>
        </div>
        <div className="Calculator-inputs-row row-2">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">&times;</button>
        </div>
        <div className="Calculator-inputs-row row-3">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>
        </div>
        <div className="Calculator-inputs-row row-4">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">+</button>
        </div>
        <div className="Calculator-inputs-row row-5">
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
