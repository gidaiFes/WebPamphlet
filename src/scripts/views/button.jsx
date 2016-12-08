var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  componentDidMount:function(){
    this.setState({push_flag: false});
		this.setState({style: {
			background: "#FF0000"
		}});
  },
	changeFlag:function(){
		this.state.push_flag = !this.state.push_flag;
		console.log("this is %s",this.state.push_flag);
	},
  render:function(){
    return(
      <div>
			  <button	type="button" onClick={this.changeFlag}>button</button>
			</div>
		);
	}
});

module.exports = Button;
