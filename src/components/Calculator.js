/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="Calc-container">
        <div className="display-result">0</div>
        <div className="clear pad">AC</div>
        <div className="sign pad">+/-</div>
        <div className="modular pad">%</div>
        <div className="div operator">/</div>
        <div className="seven pad">7</div>
        <div className="eight pad">8</div>
        <div className="nine pad">9</div>
        <div className="mult operator">x</div>
        <div className="four pad">4</div>
        <div className="five pad">5</div>
        <div className="six pad">6</div>
        <div className="sub operator">-</div>
        <div className="one pad">1</div>
        <div className="two pad">2</div>
        <div className="three pad">3</div>
        <div className="plus operator">+</div>
        <div className="zero pad">0</div>
        <div className="equal operator">=</div>
      </div>
    );
  }
}
