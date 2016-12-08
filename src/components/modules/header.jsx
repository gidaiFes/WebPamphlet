import React from 'react';
import Nav from './nav.jsx';

const Header = React.createClass({
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
