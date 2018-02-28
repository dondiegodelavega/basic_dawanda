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

const orangeBorder = {
  borderColor:"orange"
}

class PassWordInput extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.state = { inputValue:'', show: false, warning:false};
  }

  componentDidMount() {
    this.props.onSubmit(this.validate)
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  toggleShow(){
    this.setState({show: !this.state.show})
  }

  validate(){
    if(this.state.inputValue.trim() === ''){
      this.setState({warning : true});
      this.togglePopover();
    }else{
      this.setState({warning : false});
    }
  }

  render() {
    const {classes} = this.props;

    var otherProps = {};
    if( this.state.warning){
      otherProps = {
        style : orangeBorder
      };
    }

    return (
      <div className={classes.root}>
        
        <Label className={classes.label}>Passwort</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend" >
            <InputGroupText id={this.props.id}>
                <LockIcon/>
            </InputGroupText>
          </InputGroupAddon>
          { this.state.show ? 
            (<Input {...otherProps} className={classes.input} style={orangeBorder}  onChange={event => this.updateInputValue(event)}/>) :
            (<Input {...otherProps} type="password" className={classes.input} onChange={event => this.updateInputValue(event)}/>) 
          }
          <InputGroupAddon addonType="append">
            <InputGroupText className={classes.showPassContainer}>
                <Label check>
                    <Input addon type="checkbox" onChange={this.toggleShow.bind(this)} value={this.state.inputValue}/>
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