import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Sound from 'react-sound';

class StarterTextPopUp extends Component {

  constructor(props){
    super(props);
    this.state = {wasClear: false, completed: 0, fakeButtonPressed: false, fakeButtonExists: true}
  }

  buttonClicked(){
    this.setState({fakeButtonPressed: true});
  }

  helpUser(){
    var wasClear = this.state.wasClear;
    this.setState({wasClear: !wasClear});
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100, fakeButtonPressed: false, fakeButtonExists: false});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render(){
    return(
      <div>
        <h2>Please read the instruction before proceding</h2>
        {/*<p className="blur-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pulvinar euismod. Duis tempor libero id lacus semper, at varius nunc pulvinar. Nunc pellentesque viverra eros at facilisis. Sed fermentum eros sollicitudin sodales commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In volutpat lectus elementum malesuada aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique urna lobortis tellus porta, eget malesuada lacus scelerisque. Dont forget to press second word of second paragraph to go to next page.
        </p>*/}
        <img src="/screenshot.png" width="100%"/>
        <p className="blur-text">
          Please <span onClick={this.props.onNextView}>click</span> here to go further. Ut id dapibus est, eget lacinia metus. Nulla porttitor sed dui in malesuada. Sed fermentum nulla congue dolor laoreet interdum. Mauris ligula diam, ultricies pretium risus at, elementum pharetra arcu. Aenean auctor augue at nunc aliquam finibus. Nunc euismod sit amet odio id dictum. Curabitur vel lacinia nulla, et tincidunt massa. Donec maximus vulputate enim sit amet gravida. Ut quis sem a nibh commodo finibus. Nullam congue est vehicula diam faucibus pharetra.
        </p>
        <p className="blur-not-that-much">
          Visual artefacts may get visible on Google Chrome, Mozilla and Safari browsers. Please use IE 5.0 or older for comfort experience.
        </p>
        <br />
        <Checkbox
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          label="Press here if having problems with access"
          onClick={this.helpUser.bind(this)}
        />
        <br />
        {this.state.wasClear ? <p style={{color: "red"}}>Your browser is not supported. To complete the form check the instructions above. Tip: you can highlight the text to see it/</p> : <div></div>}
        <br />
        <br />
        <br />
        {this.state.fakeButtonPressed ? <LinearProgress mode="determinate" value={this.state.completed} /> : <div></div>}
        <br />
        {this.state.fakeButtonExists ? <img src="./submit.png" max-width="110" height="50" onClick={this.buttonClicked.bind(this)}/> : <div></div>}
      </div>
    ); // return
  } // render
}

export default StarterTextPopUp;
