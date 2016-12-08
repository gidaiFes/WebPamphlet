import React from 'react';
import ReactDOM from 'react-dom';
import Header from './modules/header.jsx';
import Body from './modules/body.jsx';
import Footer from './modules/footer.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Index = React.createClass({
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
