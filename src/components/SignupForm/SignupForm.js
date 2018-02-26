import React, { Component } from 'react'
import injectSheet from 'react-jss'
import UserIcon from 'react-icons/lib/fa/user'
import EnvelopeIcon from 'react-icons/lib/fa/envelope'
import { Button } from 'reactstrap'
import TextInput from '../TextInput/TextInput'
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
        
        
        <TextInput id="lastName" label="Vorname" icon={<UserIcon/>}/>
        <TextInput id="firstName" label="NachName" icon={<UserIcon/>}/>
        <TextInput id="middleName" label="mitgliedsName" icon={<UserIcon/>} placeholder="Dein Mitgliedsname ist offentlich"/>
        <TextInput id="email" label="E-Mail" icon={<EnvelopeIcon/>}/>
        <PasswordInput id="password"/>
        <TermsInput id="terms"/>
        <Button className={classes.button} block >
          Jetzt registrieren
        </Button>
      </div>
    );
  }
}

export default injectSheet(style)(SignupForm);