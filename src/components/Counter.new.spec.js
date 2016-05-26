// test example

import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Counter from './Counter';

// seting up everything for component
function setup() {
  let props = {
    value: 0,
    onIncrement: expect.createSpy(), // createSpy to listen the element
    onDecrement: expect.createSpy()
  }
  let renderer = TestUtils.createRenderer();
  // rendering Counter to compare it later
  renderer.render(<Counter { ...props }/>);
  let output = renderer.getRenderOutput();
  return {
    props,
    output,
    renderer,
  }
}

describe('components', () => {
  describe('Counter', () => {
    it('should render correctly', () => {
      const { output } = setup();
      // check type of Counter render result
      expect(output.type).toBe('div'); //should be div
      expect(output.props.className).toBe('test-name'); //with test-name class
      // get all the child elements
      let [ h3,
            h1,
            buttonIncr,
            buttonDecr,
            button3,
            button4
          ] = output.props.children;

      expect(h1.type).toBe('h1'); //check type
      expect(h3.type).toBe('h3');
      expect(h1.props.children).toBe(0); //check value
      expect(h3.props.children).toBe('hi i am initial state of this component');

      expect(buttonIncr.type).toBe('button');
      expect(buttonIncr.props.children).toBe('+');
      expect(buttonDecr.type).toBe('button');
      expect(buttonDecr.props.children).toBe('-');
      expect(button3.type).toBe('button');
      expect(button3.props.children).toBe('change state');
      expect(button4.type).toBe('button');
      expect(button4.props.children).toBe('change state and props');
    })

    it('should call inc and dec actions on button press', () => {
      const { output, props } = setup();
      let buttonIncr = output.props.children[2];
      let buttonDecr = output.props.children[3];
      expect(props.onIncrement.calls.length).toBe(0); //check caller counter
      buttonIncr.props.onClick(); //emulate onClick event
      expect(props.onIncrement.calls.length).toBe(1);
      expect(props.onDecrement.calls.length).toBe(0);
      buttonDecr.props.onClick();
      expect(props.onDecrement.calls.length).toBe(1);
    })
  })
})
