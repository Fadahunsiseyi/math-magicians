/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="answer-div">
          <span>0</span>
        </div>
        <div className="first-div">
          <button type="button" className="btn clear-all number">AC</button>
          <button type="button" className="btn number">+/-</button>
          <button type="button" className="btn modulus number">%</button>
          <button type="button" className="btn divide operator">÷</button>
        </div>
        <div className="second-div">
          <button type="button" className="btn number">7</button>
          <button type="button" className="btn number">8</button>
          <button type="button" className="btn number">9</button>
          <button type="button" className="btn multiplication operator">x</button>
        </div>
        <div className="third-div">
          <button type="button" className="btn number">4</button>
          <button type="button" className="btn number">5</button>
          <button type="button" className="btn number">6</button>
          <button type="button" className="btn substraction operator">-</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number">1</button>
          <button type="button" className="btn number">2</button>
          <button type="button" className="btn number">3</button>
          <button type="button" className="btn addition operator">+</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number zero">0</button>
          <button type="button" className="btn period number">.</button>
          <button type="button" className="btn equals-to operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
