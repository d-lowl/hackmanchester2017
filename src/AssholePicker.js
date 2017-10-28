import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';

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
    console.log(number);
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

  onStart() {
    // console.log("qweqwe");
    // setTimeout(this.increment,1000)
  }

  render() {
    return (
      <div>
        {this.state.number}
        <Slider
          min={this.props.min}
          max={this.props.max}
          value={this.state.number}
          step={1}
          disabled={true}/>
        <FlatButton label="START" primary={true} onClick={this.onStart}/>
      </div>
    );
  }

}

export default AssholePicker;
