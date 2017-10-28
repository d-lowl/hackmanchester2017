import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';

class AssholeDayPicker extends Component {

  constructor(props) {
    super(props);
    this.max = moment(this.props.userMonth, "MM").daysInMonth();
    this.state = {
      number: this.props.min
    }
  }

  componentWillUpdate(nextProps)
  {
    this.max = moment(nextProps.userMonth, "MM").daysInMonth();
  }

  increment(){
    var number = this.state.number;
    number+=5;
    if(number > this.max)
    {
      number = number % this.max;
    }
    this.setState((oldState) => {
      return{
        ...oldState,
        number
      }
    });
  }

  decrement(){
    var number = this.state.number;
    number-=2;
    if(number < this.props.min)
    {
      number = this.max - number;
    }
    this.setState((oldState) => {
      return{
        ...oldState,
        number
      }
    });
  }

  render(){
    return(
      <div>
        {this.state.number}
        <FlatButton label="-" primary={true} onClick={this.decrement.bind(this)}/>
        <FlatButton label="+" primary={true} onClick={this.increment.bind(this)}/>
      </div>
    );
  }
}

export default AssholeDayPicker;
