import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import store from '../../store';
import App from '../App';
import { Provider } from 'react-redux';

describe('App', () => {
  it('should render properly', () => {
    // const app = TestUtils.renderIntoDocument(
    //   <Provider store={ store }>
    //       <App />
    //   </Provider>
    // );
    let renderer = TestUtils.createRenderer();
    // rendering Counter to compare it later
    renderer.render(
      <Provider store={ store }>
        <App />
      </Provider>
    );
    let output = renderer.getRenderOutput();
    // let app = renderer.render()
    // console.log(output.type.WrappedComponent)
  });
})
