import React, { Component } from 'react'
import injectSheet from 'react-jss'
import UserIcon from 'react-icons/lib/fa/user'
import EnvelopeIcon from 'react-icons/lib/fa/envelope'
import { Button } from 'reactstrap'
import InfoInput from '../InfoInput/InfoInput'
import PasswordInput from '../PasswordInput/PasswordInput'
import TermsInput from '../TermsInput/TermsInput'
const style = {
  root:{
    padding: '5px 15px 15px 15px',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  button : {
    fontSize:16,
    padding: 10,
    backgroundColor: "#729c0b",
    '&:hover':{
      backgroundColor: "#5b7b0a"
    }
  },
}

class SignupForm extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        
        
        <InfoInput label="Vorname" icon={<UserIcon/>}/>
        <InfoInput label="NachName" icon={<UserIcon/>}/>
        <InfoInput label="mitgliedsName" icon={<UserIcon/>} placeholder="Dein Mitgliedsname ist offentlich"/>
        <InfoInput label="E-Mail" icon={<EnvelopeIcon/>}/>
        <PasswordInput/>
        <TermsInput/>
        <Button className={classes.button} block >
          Jetzt registrieren
        </Button>
      </div>
    );
  }
}

export default injectSheet(style)(SignupForm);