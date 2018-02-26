import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
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
  input:{
      fontSize:14,
      '&::placeholder':{
        color:'#AAA'
      }
  }
}

class InputInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue:''};
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  validate(){
    if(this.state.inputValue.trim() === ''){
      this.togglePopover()
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Label className={classes.label}>{this.props.label}</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend" >
            <InputGroupText id={this.props.id} onClick={() => this.validate()}>
              {this.props.icon}
            </InputGroupText>
          </InputGroupAddon>
          <Input className={classes.input} placeholder={this.props.placeholder} value={this.state.inputValue} onChange={event => this.updateInputValue(event)}/>
        </InputGroup>
        <WarningPopover activate={toggle => this.togglePopover = toggle} target={this.props.id} text="muss ausgefullt werden"/>
      </div>

    );
  }
}

export default injectSheet(style)(InputInfo);