var React = require('react');
var Nav = require('./nav.jsx');

var Header = React.createClass({
	render: function(){
		return(
			<div>
				<img src="assets/img/gidai.png"/>
        <h1>this header</h1>
			  <Nav />
			</div>
		);
	}
});

module.exports = Header;
