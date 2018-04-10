import _ from 'lodash';
import { FETCH_RANDOM } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RANDOM:
      return _.mapKeys(action.payload.data.meals, 'idMeal');
    default:
      return state;
  }
}
