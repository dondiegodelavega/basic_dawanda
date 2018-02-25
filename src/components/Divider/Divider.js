import React, { Component } from 'react';
import injectSheet from 'react-jss'

const style = {
  root:{
    padding: "5px 10px"
  },
  dividerContainer: {
    width: '100%', 
    height: 14, 
    borderBottom: '1px solid #999',
    textAlign: 'center'
  },
  dividerText: {
    color:'#666',
    fontSize: 12,
    fontWeight: 500,
    textTransform:'Uppercase',
    backgroundColor: '#f9f7f4',
    padding: '0 10px'
  }
}

class Divider extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.dividerContainer}>
          {this.props.title && 
            <span className={classes.dividerText}>{this.props.title}</span>
          }
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(Divider);