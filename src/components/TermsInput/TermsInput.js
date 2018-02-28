import React, { Component } from 'react'
import injectSheet from 'react-jss'
import  { FormGroup, Label, Input } from 'reactstrap'
import WarningPopover from '../WarningPopover/WarningPopover'

const style = {
  root:{
    marginBottom: 10,
    padding : 10
  },
  label:{
    display: 'block',
    color: '#666',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.5,
    paddingTop: 5,
    paddingleft: 5,
    cursor:'default'
  },
  link:{
    cursor:'pointer',
    color:'#23b5e4'
  }
}

class TermsInput extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.state = { checked: false};
  }

  componentDidMount() {
    this.props.onSubmit(this.validate)
  }

  updateCheckBox() {
    this.setState({
      checked: !this.state.checked
    });
  }

  validate(){
    if(!this.state.checked){
      this.togglePopover()
    }else{
      //
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormGroup check>
          <Label check>
            <Input  type="checkbox" checked={this.state.checked} onChange={() => this.updateCheckBox()}/>{' '}
            <span id={this.props.id} className={classes.label}>Ich willige in die Verarbeitung und Nutzung meiner Daten gemäß der <span className={classes.link}>Datenschutzerklärung</span> ein.</span>
          </Label>
        </FormGroup>
        <WarningPopover activate={toggle => this.togglePopover = toggle} target={this.props.id} text="bitte akzeptieren Sie die Bedingungen"/>
      </div>
    );
  }
}

export default injectSheet(style)(TermsInput);
