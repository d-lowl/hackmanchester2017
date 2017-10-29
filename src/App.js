import React, { Component } from 'react';
import logo from './logo.svg';
import AssholeYearPicker from './AssholeYearPicker.js';
import AssholeMonthPicker from './AssholeMonthPicker.js';
import AssholeDayPicker from './AssholeDayPicker.js';
import SmartCaptcha from './SmartCaptcha.js';
import AssholeHelper from './AssholeHelper.js';
import StarterTextPopUp from './StarterTextPopUp';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      userMonth: 1,
      captcha: false
    }
    this.currentViewChoice = 0;
    this.views=[
      (<StarterTextPopUp />),
      (<AssholeYearPicker min={2007} max={2019}/>),
      (<AssholeMonthPicker min={1} max={12} userMonth={this.state.userMonth} onChange={this.onMonthChange.bind(this)}/>),
      (<AssholeDayPicker min={1} max={31} userMonth={this.state.userMonth} />),
      (<SmartCaptcha
        onCorrect={() => this.setState(
          (oldState) => {
            return {
              ...oldState,
              captcha: true
            }
          }
        )}/>)
    ];
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
          {this.views[this.currentViewChoice]}
          <AssholeHelper />
        </div>
      </div>
    );
  }
}

export default App;
