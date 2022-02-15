/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="Calc-container">
        <div className="display-result">0</div>
        <button type="button" className="clear pad">AC</button>
        <button type="button" className="sign pad">+/-</button>
        <button type="button" className="modular pad">%</button>
        <button type="button" className="div operator">/</button>
        <button type="button" className="seven pad">7</button>
        <button type="button" className="eight pad">8</button>
        <button type="button" className="nine pad">9</button>
        <button type="button" className="mult operator">x</button>
        <button type="button" className="four pad">4</button>
        <button type="button" className="five pad">5</button>
        <button type="button" className="six pad">6</button>
        <button type="button" className="sub operator">-</button>
        <button type="button" className="one pad">1</button>
        <button type="button" className="two pad">2</button>
        <button type="button" className="three pad">3</button>
        <button type="button" className="plus operator">+</button>
        <button type="button" className="zero pad">0</button>
        <button type="button" className="equal operator">=</button>
      </div>
    );
  }
}
