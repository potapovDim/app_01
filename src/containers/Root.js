/*
* Root container
* main goal is wrap our application components into store (context)
* for this we are using react-redux <Provider />
*/

import React, {Component} from 'react';
import store from '../store'
import { connect } from 'react-redux';
import App from './App'
import { Provider } from 'react-redux';

class Root extends Component {
  render () {
    return (
      <Provider store={ store }>
          <App { ...this.props } />
      </Provider>
    )
  }
}

export default Root;
