/*
* This is application container
* main goal to get store state and pass down AC
* for this we are using react-redux connect
*/

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter'
import { onIncrement, onDecrement } from '../actions/';

class App extends Component {
  render () {
    return (
      <Counter { ...this.props }/>
    )
  }
}

export default connect(state => {
  return state;
}, { onIncrement, onDecrement})(App);
