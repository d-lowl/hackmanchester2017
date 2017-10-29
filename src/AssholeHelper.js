import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class AssholeHelper extends Component {

  constructor(props){
    super(props);
    this.state = {
      left: false
    }
    this.hidePopUp = this.hidePopUp.bind(this);
    this.showPopUp = this.showPopUp.bind(this);
  }

  hidePopUp(){
    console.log("Hello m8");
    this.setState(
      (oldState) => {
        return{
          ...oldState,
          left: !oldState.left
        }
      }
    );
  }

  showPopUp(){
    this.setState(
      (oldState) => {
        return{
          ...oldState,
          hidden: false
        }
      }
    );
  }

  render(){
    return(
      <Card className={"helper " + (this.state.left ? "helper-left" : "")} onMouseEnter={this.hidePopUp}>
        <CardHeader
          title="Helper"
          subtitle="Professional"
          avatar="./helper.jpg"
        />
        <CardMedia>
          <img src="./helper.jpg" alt="" />
        </CardMedia>
        <CardText>
          Our professional helper is willing to help you wtih your struggles! Dont hesitate to message him!
        </CardText>
        <CardActions>
          <RaisedButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" label="Message instructor" secondary={true}/>
        </CardActions>
      </Card>
    ); // return
  } // render
}

export default AssholeHelper;
