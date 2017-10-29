import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import order from './mean_prior_order.json';
import './SmartCaptcha.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  wrong: {
    color: 'rgb(206, 17, 38)',
  }
};

class SmartCaptcha extends Component {

  getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
  }

  pickFromOrder(n){
    var minIndex = null;
    var minValue = null;
    var list = [];
    let max = order.length;
    for(var i = 0; i < n; i++){
      let x = this.getRandomInt(max);
      if(minValue == null || minValue > x){
        minValue = x;
        minIndex = i;
      }
      list[i] = order[x];
    }
    return {
      correctIndex: minIndex,
      list
    }
  }

  constructor(props) {
    super(props);
    var pick = this.pickFromOrder(3);
    this.state = {
      ...pick,
      wrong: false,
      correct: false
    }
  }

  resetCaptcha() {
    var newPick = this.pickFromOrder(3);
    this.setState((oldState) => {
      return {
        ...oldState,
        ...newPick,
        wrong: true,
        correct: false
      }
    })
  }

  onCorrect() {
    this.setState((oldState) => {
      return {
        ...oldState,
        wrong: false,
        correct: true
      }
    })
    this.props.onCorrect();
  }

  render() {
    console.log(this.state.correctIndex)
    var picks = [];
    for(var v in this.state.list){
      picks.push(
        <RadioButton
          disabled={this.state.correct}
          key={v}
          value={v}
          label={this.state.list[v].product_name}
          style={styles.radioButton}
        />
      );
    }
    return (
      <div>
        <h2>Pick product which is reordered more frequently to confirm that you are a human</h2>
        <p className="wrong">{this.state.wrong ? "That was wrong" : ""}</p>
        <p className="correct">{this.state.correct ? "You WERE right!" : ""}</p>
        <RadioButtonGroup
          name="captcha"
          onChange={
            (event,value) => {
              if(this.state.correctIndex != value){
                this.resetCaptcha();
              } else {
                this.onCorrect();
              }
            }
          }
          valueSelected={null}
        >
          {picks}
        </RadioButtonGroup>
        <FlatButton label="Next" disabled={!this.state.correct} primary={true} onClick={this.props.onNextView}/>
      </div>
    );
  }

}

export default SmartCaptcha;
