import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const buttonName = e.currentTarget.textContent;
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="Calculator-container">
        <div className="Calculator-answer">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{!next && !operation && !total ? 0 : next}</span>
        </div>
        <div className="Calculator-inputs-row row-1">
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
          <button type="button" onClick={this.handleClick}>÷</button>
        </div>
        <div className="Calculator-inputs-row row-2">
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>
          <button type="button" onClick={this.handleClick}>x</button>
        </div>
        <div className="Calculator-inputs-row row-3">
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button type="button" onClick={this.handleClick}>-</button>
        </div>
        <div className="Calculator-inputs-row row-4">
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button type="button" onClick={this.handleClick}>+</button>
        </div>
        <div className="Calculator-inputs-row row-5">
          <button type="button" onClick={this.handleClick}>0</button>
          <button type="button" onClick={this.handleClick}>.</button>
          <button type="button" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
