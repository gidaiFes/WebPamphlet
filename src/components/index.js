import React from 'react';
import ReactDOM from 'react-dom';
import Header from './views/header.jsx';
import Body from './views/body.jsx';
import Footer from './views/footer.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

var Index = React.createClass({
  render:function(){
    return (
      <div>
				<Header />
        <MuiThemeProvider>
          <RaisedButton label="Primary" primary={true} />
        </MuiThemeProvider>
				<Body />
				<Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
