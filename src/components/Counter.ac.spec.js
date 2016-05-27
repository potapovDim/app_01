import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Counter from './Counter';
import store from '../store';
import { onIncrement, onDecrement } from '../actions/';

describe('Counters actions', () => {
  it('should act properly', () => {
    let props = {
      onIncrement: () => store.dispatch(onIncrement()),
      onDecrement: () => store.dispatch(onDecrement())
    }
    let renderer = TestUtils.createRenderer();
    let counter = <Counter value={store.getState().value} { ...props }/>
    renderer.render(counter);

    let output = renderer.getRenderOutput();
    let h1 = output.props.children[1];
    let buttonIncr = output.props.children[2];
    let buttonDecr = output.props.children[3];
    // === default state
    expect(h1.props.children).toBe(0)
    // === inc button click
    buttonIncr.props.onClick();
    counter = <Counter value={store.getState().value} { ...props }/>
    renderer.render(counter);
    output = renderer.getRenderOutput();
    h1 = output.props.children[1];
    expect(h1.props.children).toBe(1)
    // === dec button click
    buttonDecr.props.onClick()
    counter = <Counter value={store.getState().value} { ...props }/>
    renderer.render(counter);
    output = renderer.getRenderOutput();
    h1 = output.props.children[1];
    expect(h1.props.children).toBe(0)
  })
})
