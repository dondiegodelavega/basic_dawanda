import React, { Component } from 'react';
import injectSheet from 'react-jss'
import LockIcon from 'react-icons/lib/fa/lock'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';

const style = {
  root:{
    marginBottom: 10
  },
  label:{
    fontSize: 10,
    color: '#999',
    textTransform: 'uppercase'
  },
  checkLabel:{
    fontSize: 12,
    color: '#666',
    paddingLeft:5
  },
  input:{
      fontSize:14,
  }
}

class PassWordInput extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        
        <Label className={classes.label}>Passwort</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend" >
            <InputGroupText>
                <LockIcon/>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" className={classes.input}/>
          <InputGroupAddon addonType="append">
            <InputGroupText>
                <Label check>
                    <Input addon type="checkbox"/>
                    <span className={classes.checkLabel}>Anzeigen</span>
                </Label>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default injectSheet(style)(PassWordInput);