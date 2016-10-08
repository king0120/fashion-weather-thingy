import React from 'react';
import FlatButton from 'material-ui/FlatButton';


export default class NavButton extends React.Component{
  render(){
    let link = "/#" + this.props.to;
    return (
      <div>
        <FlatButton 
          label={this.props.to}
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          href= {link}>
        </FlatButton>
      </div>
    )
  }
} 