import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default React.createClass({
  render: function () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme) }>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
});