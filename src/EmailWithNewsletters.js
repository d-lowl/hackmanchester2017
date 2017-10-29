import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class EmailWithNewsletters extends Component {

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  constructor(props)
  {
    super(props);
    this.state = {
      text: "",
      partners: 0,
    }
  }

  onCheck(e, value) {
    if(!value){
      // console.log("1");
      var new_partners = this.state.partners + 1;
      console.log(new_partners)
      this.setState({partners: new_partners})
    }
  }

  render() {
    var partners_checkboxes = [];
    for (var i = 0; i < this.state.partners; i++){
      partners_checkboxes.push(
        <Checkbox
          key={i}
          label={"Maybe subscribe for a newsletter of our partner #"+i}
          defaultChecked={true}
          onCheck={this.onCheck.bind(this)}
        />
      )
    }
    return (
      <div>
        <h2>Enter your email so we can reach to you regarding this complaint</h2>
        <TextField
          hintText="Email"
          value={this.state.text}
          onChange={(event,value) => {this.setState({text: value})}}
        />
        <Checkbox
          label="Subscribe for our newsletter"
          defaultChecked={true}
          onCheck={this.onCheck.bind(this)}
        />
        {partners_checkboxes}
        <FlatButton label="Next" disabled={!this.validateEmail(this.state.text)} primary={true} onClick={this.props.onNextView}/>
      </div>
    );
  }
}

export default EmailWithNewsletters;
