import React, { Component } from 'react';

class AssholePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.min
    }
  }

  increment() {
    var number = this.state.number;
    number++;
    if(number > this.props.max)
      number = this.props.max;
    this.setState((oldState) => {
      return {
        ...oldState,
        number
      }
    })
  }

  decrement() {
    var number = this.state.number;
    number--;
    if(number < this.props.min)
      number = this.props.min;
    this.setState((oldState) => {
      return {
        ...oldState,
        number
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }

}

export default AssholePicker;
