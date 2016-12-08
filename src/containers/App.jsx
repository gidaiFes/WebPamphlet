import React, { Component, PropTypes } from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Counter from '../Components/counter.jsx';

class App extends Component {
	static get childContextTypes() {
    return { muiTheme: PropTypes.object.isRequired };
  }
  getChildContext(){
    return {  muiTheme: getMuiTheme(MuiThemeProvider)};
  }
  render() {
    const { value, actions } = this.props;
    return (
      <div>
				<Counter value={value} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

// Appコンポーネントにstateを流し込む
function mapStateToProps(state) {
  return state.counter
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
