var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');
var Header = require('./views/Header.jsx');
var Body = require('./views/Body.jsx');
var Footer = require('./views/Footer.jsx');

//コンポーネントを一つにまとめる
var Index = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <hr/>
				<div id="main">
          <Body/>
        </div>
        <hr/>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);;
