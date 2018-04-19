import _ from 'lodash';
import { FETCH_RANDOM, FETCH_MAIN_INGREDIENT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RANDOM:
      return _.mapKeys(action.payload.data.meals, 'idMeal');
    case FETCH_MAIN_INGREDIENT:
      console.log(_.mapKeys(action.payload.data.meals, 'idMeal'));
      return _.mapKeys(action.payload.data.meals, 'idMeal');
    default:
      return state;
  }
}
