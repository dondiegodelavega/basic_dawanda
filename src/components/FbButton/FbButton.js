import React, { Component } from 'react'
import { Button } from 'reactstrap'
import injectSheet from 'react-jss'
import FbIcon from 'react-icons/lib/fa/facebook';

const style = {
  root : {
    padding: "5px 15px"
  },
  button : {
    fontSize:16,
    padding: 10,
    backgroundColor: "#315a99",
    '&:hover':{
      backgroundColor: "#2a508a"
    }
  },
  fbIcon:{
    float:'left',
    fontSize: 24
  }
}

class FbButton extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Button className={classes.button} block >
          <FbIcon className={classes.fbIcon} />Über Facebook registrieren
        </Button>
      </div>
    );
  }
}

export default injectSheet(style)(FbButton);