import React, { Component } from 'react'
import injectSheet from 'react-jss'
import LockIcon from 'react-icons/lib/fa/lock'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap'
import WarningPopover from '../WarningPopover/WarningPopover'

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
  },
  showPassContainer:{
    padding:'5px 10px'
  }
}

class PassWordInput extends Component {
  state = {
    show: false
  }

  toggleShow(){
    this.setState({show: !this.state.show})
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        
        <Label className={classes.label}>Passwort</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend" >
            <InputGroupText id={this.props.id} onClick={() => this.togglePopover()}>
                <LockIcon/>
            </InputGroupText>
          </InputGroupAddon>
          { this.state.show ? 
            (<Input className={classes.input}/>) :
            (<Input type="password" className={classes.input}/>) 
          }
          <InputGroupAddon addonType="append">
            <InputGroupText className={classes.showPassContainer}>
                <Label check>
                    <Input addon type="checkbox" onChange={this.toggleShow.bind(this)}/>
                    <span className={classes.checkLabel}>Anzeigen</span>
                </Label>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <WarningPopover activate={toggle => this.togglePopover = toggle} target={this.props.id} text="muss ausgefullt werden"/>
      </div>
    );
  }
}

export default injectSheet(style)(PassWordInput);