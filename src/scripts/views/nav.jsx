var React = require('react');

var Nav = React.createClass({
	render: function(){
		return(
			<nav>
				<ul>
          <li>TOP</li>
          <li>about</li>
				  <li>time table</li>
          <li>sponsor</li>
				</ul>
			</nav>
		);
	}
});

module.exports = Nav;
