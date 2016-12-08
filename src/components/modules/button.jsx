import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Button = React.createClass({
  componentDidMount:function(){
    this.setState({push_flag: false});
  },
	changeFlag:function(){
		this.state.push_flag = !this.state.push_flag;
		console.log("this is %s",this.state.push_flag);
	},
  render:function(){
    return(
			<div>
        <MuiThemeProvider>
          <RaisedButton label="Primary" primary={true} onClick={this.changeFlag}/>
        </MuiThemeProvider>
			</div>
		);
	}
});

module.exports = Button;
