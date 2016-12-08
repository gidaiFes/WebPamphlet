var React = require('react');
var ReactDOM = require('react-dom');
// var Header = require('./views/header.jsx');
// var Body = require('./views/body.jsx');
// var Footer = require('./views/footer.jsx');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

var Index = React.createClass({
  render:function(){
    return (
      <div>
        <h1>Hello, world</h1>
        <MuiThemeProvider>
          <RaisedButton label="Default" />
        </MuiThemeProvider>
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
