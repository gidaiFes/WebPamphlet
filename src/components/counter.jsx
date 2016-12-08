import React, { Component, PropTypes } from "react"
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends Component {
  // static PropTypes = {
  //   value: PropTypes.number.isRequired,
  //   actions: PropTypes.object.isRequired
  // }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <h2>count={value}</h2>
        <RaisedButton label="増加" onClick={actions.increment} />
        <RaisedButton label="減少" onClick={actions.decrement} />
      </div>
    )
  }
}

export default Counter
