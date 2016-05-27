// test for AC and reducers
import expect from 'expect';
import store from '../store';
import * as actions from '../actions/';
import { INCREMENT, DECREMENT } from '../actionTypes/';

describe('actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: INCREMENT,
    }
    const oldState = store.getState();
    const expecteState = { ...oldState, value: oldState.value + 1 }
    expect(actions.onIncrement()).toEqual(expectedAction)
    store.dispatch({type:INCREMENT});
    expect(store.getState()).toEqual(expecteState)
  })
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: DECREMENT,
    }
    const oldState = store.getState();
    const expecteState = { ...oldState, value: oldState.value - 1 }
    expect(actions.onDecrement()).toEqual(expectedAction)
    store.dispatch({type:DECREMENT});
    expect(store.getState()).toEqual(expecteState)
  })
})
