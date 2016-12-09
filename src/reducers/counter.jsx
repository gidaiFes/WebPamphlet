import { INCREMENT, DECREMENT } from '../constants/ActionTypes.jsx'

const initialState = {
  value: 5
}

export default function counter(state = initialState, action) {
	switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
    if(state.value > 0){
      return { value: state.value - 1 }
			}else{
        return { value: state.value }
			}
    default:
      return state
  }
}
