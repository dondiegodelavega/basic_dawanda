import React, { Component } from 'react';
import injectSheet from 'react-jss'
import  { FormGroup, Label, Input } from 'reactstrap';

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
    cursor:'pointer'
  },
  link:{
    cursor:'pointer',
    color:'#23b5e4'
  }
}

class TermsInput extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            <span className={classes.label}>Ich willige in die Verarbeitung und Nutzung meiner Daten gemäß der <span className={classes.link}>Datenschutzerklärung</span> ein.</span>
          </Label>
        </FormGroup>
      </div>
    );
  }
}

export default injectSheet(style)(TermsInput);
