/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './calculator.scss';

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
          <button type="button" className="btn clear-all">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn modulus">%</button>
          <button type="button" className="btn divide">÷</button>
        </div>
        <div className="second-div">
          <button type="button" className="btn number">7</button>
          <button type="button" className="btn number">8</button>
          <button type="button" className="btn number">9</button>
          <button type="button" className="btn multiplication">x</button>
        </div>
        <div className="third-div">
          <button type="button" className="btn number">4</button>
          <button type="button" className="btn number">5</button>
          <button type="button" className="btn number">6</button>
          <button type="button" className="btn substraction">-</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number">1</button>
          <button type="button" className="btn number">2</button>
          <button type="button" className="btn number">3</button>
          <button type="button" className="btn addition">+</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number">0</button>
          <button type="button" className="btn period">.</button>
          <button type="button" className="btn equals-to">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
