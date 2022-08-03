/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleClick(e) {
    const btnClick = e.target.innerText;
    const response = calculate(this.state, btnClick);
    this.setState(response);
  }

  handleDisplay(e) {
    const btnClick = e.target.innerText;
    this.setState((prev) => ({ ...prev, total: btnClick }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container" onChange={this.handleDisplay}>
        <div className="answer-div">
          <span>
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div className="first-div">
          <button type="button" className="btn clear-all number" onClick={this.handleClick}>AC</button>
          <button type="button" className="btn number" onClick={this.handleClick}>+/-</button>
          <button type="button" className="btn modulus number" onClick={this.handleClick}>%</button>
          <button type="button" className="btn divide operator" onClick={this.handleClick}>÷</button>
        </div>
        <div className="second-div">
          <button type="button" className="btn number" onClick={this.handleClick}>7</button>
          <button type="button" className="btn number" onClick={this.handleClick}>8</button>
          <button type="button" className="btn number" onClick={this.handleClick}>9</button>
          <button type="button" className="btn multiplication operator" onClick={this.handleClick}>x</button>
        </div>
        <div className="third-div">
          <button type="button" className="btn number" onClick={this.handleClick}>4</button>
          <button type="button" className="btn number" onClick={this.handleClick}>5</button>
          <button type="button" className="btn number" onClick={this.handleClick}>6</button>
          <button type="button" className="btn substraction operator" onClick={this.handleClick}>-</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number" onClick={this.handleClick}>1</button>
          <button type="button" className="btn number" onClick={this.handleClick}>2</button>
          <button type="button" className="btn number" onClick={this.handleClick}>3</button>
          <button type="button" className="btn addition operator" onClick={this.handleClick}>+</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number zero" onClick={this.handleClick}>0</button>
          <button type="button" className="btn period number" onClick={this.handleClick}>.</button>
          <button type="button" className="btn equals-to operator" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
