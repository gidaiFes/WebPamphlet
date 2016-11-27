var React = require('react');
var Nav = require('./nav.jsx');

var Header = React.createClass({
	render: function(){
		return(
			<div>
        <h1>this header</h1>
			  <Nav />
			</div>
		);
	}
});

module.exports = Header;
