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
      number = this.props.min;
    console.log(number);
    this.setState((oldState) => {
      return {
        ...oldState,
        number
      }
    })
  }

  onStart() {
    console.log("qweqwe");
    var intervalId;
    // setTimeout(this.increment,1000)
    if(!this.state.intervalId){
      intervalId = setInterval(this.increment.bind(this), 500);
      this.setState((oldState) => {
        return{
          ...oldState,
          intervalId
        }
      });
    }
    else {
      clearInterval(this.state.intervalId);
      this.setState((oldState) => {
        return{
          ...oldState,
          intervalId: null
        }
      });
    }
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
        <FlatButton label={!this.state.intervalId ? "START" : "STOP"} primary={true} onClick={this.onStart.bind(this)}/>
      </div>
    );
  }

}

export default AssholePicker;
