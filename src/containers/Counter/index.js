import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addToCounter,
  subtractFromCounter,
} from './actions';

class Counter extends Component {
  render = () => (
    <div>
      <p style={{color: this.props.color}}>{`Count: ${this.props.counter}`}</p>
      <button onClick={this.props.add}>+</button>
      <button onClick={this.props.subtract}>-</button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.count,
  color: state.counter.color,
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addToCounter()),
  subtract: () => dispatch(subtractFromCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
