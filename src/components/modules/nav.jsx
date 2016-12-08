const React = require('react');
const Button = require('./button.jsx')

const Nav = React.createClass({
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
