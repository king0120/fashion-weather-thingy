import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavButton from './NavButton';

import Body from './Body';

export default class App extends React.Component {
  render() {
    return (     
        <div>
          <AppBar title="My AppBar" />
          <NavButton to="/login"/>
          <Body />
        </div>
    )
  }
} 