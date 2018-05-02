import { FETCH_RANDOM } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RANDOM:
      console.log(action.payload.data.meals[0]);
      return action.payload.data.meals[0];
    default:
      return state;
  }
}
