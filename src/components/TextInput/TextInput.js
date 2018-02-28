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

const orangeBorder = {
  borderColor:"orange"
}

class InputInfo extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.state = { inputValue:'', warningMessage : 'muss ausgefullt werden'};
  }

  componentDidMount() {
    this.props.onSubmit(this.validate)
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    
    return re.test(email);
  }

  validate(){
    if(this.state.inputValue.trim() === ''){
      this.setState({warningMessage : 'muss ausgefullt werden'});
      this.togglePopover()
    }else if(this.props.type === 'email' && !this.validateEmail(this.state.inputValue)){
      this.setState({warningMessage : 'email ist ungültig'});
      this.togglePopover()
    }else{
      //
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Label className={classes.label}>{this.props.label}</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend" >
            <InputGroupText id={this.props.id}>
              {this.props.icon}
            </InputGroupText>
          </InputGroupAddon>
          <Input className={classes.input} style={orangeBorder} placeholder={this.props.placeholder} value={this.state.inputValue} onChange={event => this.updateInputValue(event)}/>
        </InputGroup>
        <WarningPopover activate={toggle => this.togglePopover = toggle} target={this.props.id} text={this.state.warningMessage}/>
      </div>

    );
  }
}

export default injectSheet(style)(InputInfo);