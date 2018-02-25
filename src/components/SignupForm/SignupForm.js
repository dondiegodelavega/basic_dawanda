import React, { Component } from 'react';
import injectSheet from 'react-jss'

const style = {
  root:{
    /* green 729c0b */
    backgroundColor:'#fff',
    padding:10
  }
}

class SignupForm extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
       
      </div>
    );
  }
}

export default injectSheet(style)(SignupForm);