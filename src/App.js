import React, { Component } from 'react';
import logo from './logo.svg';
import AssholeYearPicker from './AssholeYearPicker.js';
import AssholeMonthPicker from './AssholeMonthPicker.js';
import AssholeDayPicker from './AssholeDayPicker.js';
import SmartCaptcha from './SmartCaptcha.js';
import AssholeHelper from './AssholeHelper.js';
import StarterTextPopUp from './StarterTextPopUp';
import PredictiveComplaintArea from './PredictiveComplaintArea.js';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      userMonth: 1,
      captcha: false,
      currentViewChoice: 1
    }
    this.views=[
      (<StarterTextPopUp />),
      (<div>
         <AssholeYearPicker min={2007} max={2019}/>
         <AssholeMonthPicker min={1} max={12} userMonth={this.state.userMonth} onChange={this.onMonthChange.bind(this)}/>
         <AssholeDayPicker min={1} max={31} userMonth={this.state.userMonth} />
         <FlatButton label="Next "primary={true} onClick={this.onNextView.bind(this)}/>
       </div>),
      (<PredictiveComplaintArea
         onNextView={this.onNextView.bind(this)}
       />),
      (<SmartCaptcha
        onCorrect={() => this.setState({captcha: true})}/>)
    ];
  }

  onNextView(){
    var n = this.state.currentViewChoice + 1;
    this.setState({currentViewChoice: n});
  }

  onMonthChange(userMonth){
    this.setState(
      (oldState) => {
        return{
          ...oldState,
          userMonth
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-container">
          {this.views[this.state.currentViewChoice]}
          <AssholeHelper />
        </div>
      </div>
    );
  }
}

export default App;
