import * as types from '../constants/ActionTypes.jsx';

export function increment() {
  return { type: types.INCREMENT }
}

export function decrement() {
  return { type: types.DECREMENT }
}

