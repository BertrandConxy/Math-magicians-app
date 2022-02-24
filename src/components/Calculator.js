import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const clickHandler = (e) => {
    const buttonName = e.target.id;
    const { total, next, operation } = calculate(state, buttonName);
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  return (
    <div className="Calc-container">
      <div className="display-result" data-testid="display">{state.next || state.total || '0'}</div>
      <button data-testid="AC" type="button" id="AC" className="clear pad" onClick={clickHandler}>AC</button>
      <button type="button" id="+/-" className="sign pad" onClick={clickHandler}>+/-</button>
      <button type="button" id="%" className="modular pad" onClick={clickHandler}>%</button>
      <button type="button" id="÷" className="div operator" onClick={clickHandler}>÷</button>
      <button data-testid="7" type="button" id="7" className="seven pad" onClick={clickHandler}>7</button>
      <button data-testid="8" type="button" id="8" className="eight pad" onClick={clickHandler}>8</button>
      <button type="button" id="9" className="nine pad" onClick={clickHandler}>9</button>
      <button type="button" id="x" className="mult operator" onClick={clickHandler}>x</button>
      <button type="button" id="4" className="four pad" onClick={clickHandler}>4</button>
      <button type="button" id="5" className="five pad" onClick={clickHandler}>5</button>
      <button type="button" id="6" className="six pad" onClick={clickHandler}>6</button>
      <button type="button" id="-" className="sub operator" onClick={clickHandler}>-</button>
      <button type="button" id="1" className="one pad" onClick={clickHandler}>1</button>
      <button type="button" id="2" className="two pad" onClick={clickHandler}>2</button>
      <button type="button" id="3" className="three pad" onClick={clickHandler}>3</button>
      <button data-testid="+" type="button" id="+" className="plus operator" onClick={clickHandler}>+</button>
      <button type="button" id="0" className="zero pad" onClick={clickHandler}>0</button>
      <button type="button" id="." className="period pad" onClick={clickHandler}>.</button>
      <button data-testid="=" type="button" id="=" className="equal operator" onClick={clickHandler}>=</button>
    </div>
  );
};

export default Calculator;
