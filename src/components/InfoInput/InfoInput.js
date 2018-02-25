import React, { Component } from 'react';
import injectSheet from 'react-jss'
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
  input:{
      fontSize:14,
      '&::placeholder':{
        color:'#AAA'
      }
  }
}

class InputInfo extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        
        <Label className={classes.label}>{this.props.label}</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend" >
            <InputGroupText>
              {this.props.icon}
            </InputGroupText>
          </InputGroupAddon>
          <Input className={classes.input} placeholder={this.props.placeholder}/>
        </InputGroup>
      </div>
    );
  }
}

export default injectSheet(style)(InputInfo);