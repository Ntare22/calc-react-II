import React, { Component } from 'react';
import NumsOperations from './NumsOperations';
import calculate from '../logic/calculate';
import '../logic/operate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
  }

  clickHandler = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.value));
  }

  render() {
    let value = 0;
    const { total, next } = this.state;
    if (next) {
      value = next;
    } else if (total) {
      value = total;
    }

    return (
      <>
        <input className="calc-screen" placeholder="0" value={value} readOnly />
        <NumsOperations handleClick={this.clickHandler} />
      </>
    );
  }
}
