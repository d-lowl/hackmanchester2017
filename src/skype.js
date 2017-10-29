import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Sound from 'react-sound';

class Skype extends Component {

  constructor(props){
    super(props);
    this.state = {
      left: false,
      sound: Sound.status.PLAYING
    }
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  hidePopUp(){
    console.log("Hello m8");
    this.props.turnOffSkype();
  }

// http://www.freesfx.co.uk/rx2/mp3s/6/18337_1464631212.mp3
// http://www.freesfx.co.uk/rx2/mp3s/5/16914_1461333028.mp3
// https://www.myinstants.com/media/sounds/greenscreen-wow.mp3
  render(){
    console.log(this.state);
    return(
      <div>
        <Card className="skype" style={{backgroundColor: "#373a3f"}}>
          <CardHeader titleColor="white" subtitleColor="white"
            title="Income Call"
            subtitle="Professional"
            avatar="./skype.png"
          />
          <CardMedia>
            <img src="./helper4.jpg" alt="" />
          </CardMedia>
          <CardActions>
            <RaisedButton backgroundColor="#a4c639" label="Answer" onClick={this.hidePopUp}/>
            <RaisedButton label="Decline" secondary={true}/>
          </CardActions>
        </Card>

        <Sound
        url="/skype_call.mp3"
        playStatus={this.state.sound}
        onFinishedPlaying={() => {
          this.setState((oldState) => {
            return {
              ...oldState,
              sound: Sound.status.STOPPED
            }
          })
        }}
        playFromPosition={0 /* in milliseconds */}
        />
      </div>
    ); // return
  } // render
}

export default Skype;
