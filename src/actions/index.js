import { INCREMENT, DECREMENT } from '../actionTypes/';

// action creators
// using react-redux connect we are wrapping this into dispatcher
export const onIncrement = () => {
  console.log('action called');
  return ({
    type:INCREMENT, // <- type of action
  })
}
export const onDecrement = () => {
  console.log('action called');
  return ({
    type:DECREMENT,
  })
}
