import { INCREMENT, DECREMENT } from '../actionTypes/';

// Reducer
const initialState = {
  value: 0,
};
export default (state = initialState, action) => {
  console.log('======reducer=====');
  console.log('reducer received action of type: ' + action.type);
	switch(action.type){
		case INCREMENT:
      console.log('old state:' + JSON.stringify(state));
      console.log('new state:' + JSON.stringify({ ...state, value: state.value + 1 }));
      console.log('==================');
			return { ...state, value: state.value + 1 }
		case DECREMENT:
      console.log('old state:' + JSON.stringify(state));
      console.log('new state' + JSON.stringify({ ...state, value: state.value - 1 }));
      console.log('==================');
			return { ...state, value: state.value - 1 }
		default:
      console.log('==================');
			return state
	}
}
