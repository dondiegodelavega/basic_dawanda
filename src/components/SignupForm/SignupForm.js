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

  submitForm(){
    this.validateLastName();
    this.validateFirstName();
    this.validateMiddleName();
    this.validateEmail();
    this.validatePassword();
    this.validateTerms();
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        
        
        <TextInput id="lastName" label="Vorname" icon={<UserIcon/>}  
          onSubmit={validate => this.validateLastName = validate} />
        <TextInput id="firstName" label="NachName" icon={<UserIcon/>}  
          onSubmit={validate => this.validateFirstName = validate} />
        <TextInput id="middleName" label="mitgliedsName" icon={<UserIcon/>} placeholder="Dein Mitgliedsname ist offentlich" 
          onSubmit={validate => this.validateMiddleName = validate} />
        <TextInput id="email" label="E-Mail" icon={<EnvelopeIcon/>} type="email" 
          onSubmit={validate => this.validateEmail = validate}/>
        <PasswordInput id="password" 
          onSubmit={validate => this.validatePassword = validate}/>
        <TermsInput id="terms" 
          onSubmit={validate => this.validateTerms = validate}/>
        <Button className={classes.button} block onClick={()=>this.submitForm()} >
          Jetzt registrieren
        </Button>
      </div>
    );
  }
}

export default injectSheet(style)(SignupForm);