/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from './logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '',
      operation: '',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const buttonName = e.target.id;
    const { total, next, operation } = calculate(this.state, buttonName);
    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    return (
      <div className="Calc-container">
        <div className="display-result">{this.state.next || this.state.total || '0'}</div>
        <button type="button" id="AC" className="clear pad" onClick={this.clickHandler}>AC</button>
        <button type="button" id="+/-" className="sign pad" onClick={this.clickHandler}>+/-</button>
        <button type="button" id="%" className="modular pad" onClick={this.clickHandler}>%</button>
        <button type="button" id="÷" className="div operator" onClick={this.clickHandler}>÷</button>
        <button type="button" id="7" className="seven pad" onClick={this.clickHandler}>7</button>
        <button type="button" id="8" className="eight pad" onClick={this.clickHandler}>8</button>
        <button type="button" id="9" className="nine pad" onClick={this.clickHandler}>9</button>
        <button type="button" id="x" className="mult operator" onClick={this.clickHandler}>x</button>
        <button type="button" id="4" className="four pad" onClick={this.clickHandler}>4</button>
        <button type="button" id="5" className="five pad" onClick={this.clickHandler}>5</button>
        <button type="button" id="6" className="six pad" onClick={this.clickHandler}>6</button>
        <button type="button" id="-" className="sub operator" onClick={this.clickHandler}>-</button>
        <button type="button" id="1" className="one pad" onClick={this.clickHandler}>1</button>
        <button type="button" id="2" className="two pad" onClick={this.clickHandler}>2</button>
        <button type="button" id="3" className="three pad" onClick={this.clickHandler}>3</button>
        <button type="button" id="+" className="plus operator" onClick={this.clickHandler}>+</button>
        <button type="button" id="0" className="zero pad" onClick={this.clickHandler}>0</button>
        <button type="button" id="=" className="equal operator" onClick={this.clickHandler}>=</button>
      </div>
    );
  }
}
