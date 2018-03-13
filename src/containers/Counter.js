import React, { Component} from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/actions'

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <div>
          <p>Numero: {this.props.number}</p>
        </div>
        <button onClick={this.props.incrementNumber}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.number,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementNumber: () => {
      dispatch(increment)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);