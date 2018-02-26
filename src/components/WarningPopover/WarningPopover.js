import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { Popover, PopoverHeader } from 'reactstrap';

const style = {
  root:{
    
  },
  popover:{
    borderColor:'#f7951f',
    color:'#f7951f',
    '& .arrow::after':{
      borderBottomColor:'#fbe0a7',
    },
    '& .arrow::before':{
      borderBottomColor:'#f7951f',
    }
  },
  popoverHeader:{
    backgroundColor:'#fbe0a7',
  }
}

class WarningPopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { popoverOpen: false };
  }

  componentDidMount() {
    this.props.activate(this.toggle)
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
      
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Popover 
        className={classes.popover}
        placement="bottom" 
        isOpen={this.state.popoverOpen} 
        target={this.props.target} 
        toggle={this.toggle}>
          <PopoverHeader className={classes.popoverHeader}>{this.props.text}</PopoverHeader>
        </Popover>
      </div>
    );
  }
}

export default injectSheet(style)(WarningPopover);
