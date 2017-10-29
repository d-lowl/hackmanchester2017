import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AssholeYearPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.min,
      open: false,
      wasOpen: false
    }
  }


  handleOpen(){
    // this.setState((oldState) => {
    //   return
    //   {
    //     ...oldState,
    //     open: true
    //   }
    // })
    this.setState({open: true, wasOpen: true});
  }

  handleClose(){
    // this.setState((oldState) => {
    //   return
    //   {
    //     ...oldState,
    //     open: false
    //   }
    // })
    this.setState({open: false});
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
    if(!this.state.wasOpen)
      this.handleOpen();
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

    const actions = [
      <FlatButton
        label="No way!"
        primary={true}
        disabled={true}
        onClick={this.handleClose.bind(this)}
      />,
      <button
        className="beautiful-button"
        onClick={this.handleClose.bind(this)}
      >Alright</button>,
    ];

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
        <Dialog
          title="User agreement"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Would you like to receive useful information from our sponsors?
        </Dialog>
      </div>
    );
  }

}

export default AssholeYearPicker;
