import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import Sound from 'react-sound';

class Fission extends Component {

  constructor(props){
    super(props);
    this.state = {
      before: true
    }
  }

  doFission() {
    if(this.state.before && !this.state.loading) {
      this.setState({loading: true});
      var interval = setInterval(() => {
        this.setState({loading: false, before: false});
        clearInterval(interval);
      },5000);
    }
  }

  onFissionFinished() {

  }

  render(){
    var label = (this.state.before ? (this.state.loading ? "Fission in progress..." : "To finish the complaint process please fission the atom") : "Fission was successful")
    return(
      <div>
        <h2>{label}</h2>
        <img
          style={{height: 600}}
          src={this.state.before ? "/atom_before.png" : "/atom_after.png"}
          onClick={this.doFission.bind(this)}
        />
        <CircularProgress
          style={{
            position: "fixed",
            bottom: "42%",
            left: "48%",
            visibility: this.state.loading ? "visible" : "hidden"
          }}
          color="red"
          size={80}
          thickness={5}
        />
        <br />
        <FlatButton label="Submit" disabled={this.state.before} primary={true} onClick={this.props.onNextView}/>
      </div>
    ); // return
  } // render
}

export default Fission;
