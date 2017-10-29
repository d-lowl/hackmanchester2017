import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AssholeMonthPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0
    }
    this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.questions = [
      (<div>Multiply your month number by 2</div>),
      (<div>Multiply your month number by 5</div>),
      (<div>Divide it by your original number</div>),
      (<div>Subtract 7 from the result</div>),
      (<div>Is the number you have got is 3?</div>),
      (<SelectField floatingLabelText="Month" value={this.props.userMonth} onChange={
        (event, index, value) => {this.props.onChange(value)}}>
        {this.getMonths()}
      </SelectField>
      )
    ];
  }


  getMonth(index){

    return(
      <MenuItem key={index} value={index+1} primaryText={this.month[index]} />
    );
  }

  getMonths(){
    var array = [];
    for(var i = 0; i < this.month.length; i++)
    {
      array.push(this.getMonth(i));
    }
    return array;
  }

  incrementQuestionIndex(){
    var questionIndex = this.state.questionIndex;
    questionIndex++;
    if(questionIndex >= this.questions.length)
    {
      questionIndex = this.state.questionIndex;
    }
    this.setState((oldState) => {
      return{
        ...oldState,
        questionIndex
      }
    })
  }

  render(){
    console.log(this.props.userMonth);
    var buttonLabel;
    if(this.state.questionIndex == 0)
    {
      buttonLabel = "Let me guess your number"
    }
    else
    {
      if(this.state.questionIndex == 4)
      {
        buttonLabel = "YES"
      }
      else
      {
        buttonLabel = "NEXT"
      }
    }

    return(
      <div style={{marginTop: "10px", marginBottom: "20px"}}>
        <FlatButton label={buttonLabel} primary={true} onClick={this.incrementQuestionIndex.bind(this)} />
        {this.state.questionIndex != 0 ? this.questions[this.state.questionIndex] : <div></div>}
      </div>
    );
  }
}

export default AssholeMonthPicker;
