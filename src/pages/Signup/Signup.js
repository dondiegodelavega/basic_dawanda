import React, { Component } from 'react';
import injectSheet from 'react-jss'
import FbButton from '../../components/FbButton/FbButton'
import Divider from '../../components/Divider/Divider'
import SignupForm from '../../components/SignupForm/SignupForm' 

const style = {
  root:{
    width: 400,
    height: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding:"15px 0",
  },
  centered:{
    fontSize:12,
    fontWeight: 500,
    color:'#666',
    textAlign:'center'
  },
  link:{
    cursor:'pointer',
    color:'#23b5e4'
  }
}

class Signup extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FbButton/>
        <Divider title="Oder Ohne Facebook"/>
        <SignupForm/>
        <Divider/>
        <p className={classes.centered}>
          Bereits Mitglied bei DaWanda? <span className={classes.link}>Hier einloggen</span>
        </p>
      </div>
    );
  }
}

export default injectSheet(style)(Signup);
