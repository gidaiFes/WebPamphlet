var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');

//ヘッダの定義
var Header = React.createClass({
  render: function(){
    return (
      <h1>ヘッダです</h1>
    );
  }
});

//ボディの定義
var Body = React.createClass({
  render: function(){
    return (
      <h1>ボディです</h1>
    );
  }
});

//フッタの定義
var Footer = React.createClass({
  render: function(){
    return (
      <h1>フッタです</h1>
    );
  }
});

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
