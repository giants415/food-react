import { FETCH_RECIPES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return // SOMETHING
    default:
      return state;
  }
}
