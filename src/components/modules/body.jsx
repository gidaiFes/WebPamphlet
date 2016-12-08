const React = require('react');
const ReactDOM = require('react-dom');
const Button = require('./button.jsx');

//ボディの定義
const Body = React.createClass({
  render: function(){
    return (
      <TimeTable/>
    ); }
});

//フォームとリストを一つにしたもの
const UserBox = React.createClass({
  getInitialState:function(){
    return {userData:[]};
  },
  handleAddUser:function(name, mail){
    let data = this.state.userData;
    data.push({name: name, mail: mail});
    this.setState({userData: data});
  },
  render:function(){
    return(
      <div style={{width:"300px"}}>
        <UserForm addUser={this.handleAddUser}/>
        <hr/>
        <UserList userData={this.state.userData}/>
      </div>
    );
  }
});

//リスト一行分を表示するコンポーネントを定義
const User = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    mail: React.PropTypes.string
  },
  render:function(){
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.mail}</td>
      </tr>
    );
  }
});

//リストそのものを表示するコンポーネントを定義
const UserList = React.createClass({
  propTypes:{
    userData:React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render:function(){
    let UserNodes = this.props.userData.map(function(user, index){
      return (
        <User name={user.name} mail={user.mail} key={index}/>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
          {UserNodes}
        </tbody>
      </table>
    );
  }
});

//ユーザーの入力フォームを定義
const UserForm = React.createClass({
  propTypes:{
    addUser:React.PropTypes.func.isRequired
  },
  handleSubmit:function(){
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let mail = ReactDOM.findDOMNode(this.refs.mail).value.trim();
    if (!name){
      return;
    }
    this.props.addUser(name, mail);
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.mail).value = "";
  },
  render:function(){
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>名前</label>
              </td>
              <td>
                <input type="text" ref="name"/>
              </td>
            </tr>
            <tr>
              <td>
                <label>メールアドレス</label>
              </td>
              <td>
                <input type="text" ref="mail"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign:"right"}}>
          <button onClick={this.handleSubmit}>追加</button>
        </div>
      </div>
    );
  }
});
//buttonのコンポーネントを作る
//タイムテーブルおみくじ

const TimeTable = React.createClass({
  render:function(){
    return (
      <div className="timetable">
				<table>
					<tbody>
						<tr>
							<th>場所</th>
							<th>体育館</th>
							<th>メインステージ</th>
							<th>マルチメディアセンター</th>
						</tr>
						<tr>
							<th>18</th>
							<td><Button/></td>
							<td><Button/></td>
							<td><Button/></td>
						</tr>
						<tr>
							<th>18</th>
							<td><Button/></td>
							<td><Button/></td>
							<td><Button/></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Body;