import React from 'react';
import NavButton from './NavButton';

export default class Login extends React.Component{

  render(){
    return (
      <div>
        <NavButton to="/"/>
        <input placeholder="Login" />
      </div>
    )
  }
}