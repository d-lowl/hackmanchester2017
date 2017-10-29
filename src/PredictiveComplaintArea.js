import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

const rate = 0.5

class PredictiveComplaintArea extends Component {


  constructor(props)
  {
    super(props);
    this.state = {
      text: "",
      word: ""
    }
  }

  onChange(event, value) {
    var r = Math.random();
    console.log(r);
    console.log(rate);
    if(value[value.length-1] === ' ' && r > rate){
      var words = value.split(' ');
      this.setState({text: value, word: words[words.length-2]})
      return;
    }
    this.setState({text: value})
  }

  onYes(){
    this.onClose();
  }

  onNo(){
    var words = this.state.text.split(' ');
    words.splice(-2,2);
    this.setState({text: words.join(' ')});
    this.onClose();
  }

  onClose(){
    this.setState({word: ""});
  }

  render() {
    const actions = [
      <FlatButton
        label="Nope"
        primary={true}
        onClick={this.onNo.bind(this)}
      />,
      <FlatButton
        label="Yep"
        primary={true}
        onClick={this.onYes.bind(this)}
      />,
    ];
    return (
      <div>
        <h2>What are you not happy about??!</h2>
        <TextField
          hintText="Enter your complaint here"
          multiLine={true}
          value={this.state.text}
          onChange={this.onChange.bind(this)}
        />
        <br/>
        <FlatButton label="Next" disabled={this.state.text === ""} primary={true} onClick={this.props.onNextView}/>
        <Dialog
          title="Confirmation"
          actions={actions}
          modal={true}
          open={this.state.word !== ""}
        >
          Are you sure you wanted to input "{this.state.word}"?
        </Dialog>
      </div>
    );
  }
}

export default PredictiveComplaintArea;
