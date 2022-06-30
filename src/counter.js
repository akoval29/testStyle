import React from 'react';
import {Component } from 'react';

import './app.css';

const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <div className='mt-5 mb-5 border shadowbox'>
        <button
          className={'newButton'}
          onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.some(this.state.counter)}
      </div>
    )
  }
}

function Counter1() {
  return (
    <>
      <Counter some={counter => (
        <Message counter={counter}/>
      )}/>
    </>
  );
}
export default Counter1;