var React = require('react');
var Button = require('./button.jsx')

var Nav = React.createClass({
	render: function(){
		return(
			<nav>
				<ul>
          <li><Button/></li>
          <li><Button/></li>
          <li><Button/></li>
          <li><Button/></li>
				</ul>
			</nav>
		);
	}
});

module.exports = Nav;
