import _ from 'lodash';
import { FETCH_RANDOM, FETCH_MAIN_INGREDIENT, FETCH_RECIPE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RANDOM:
      return _.mapKeys(action.payload.data.meals, 'idMeal');
    case FETCH_MAIN_INGREDIENT:
      return _.mapKeys(action.payload.data.meals, 'idMeal');
    case FETCH_RECIPE:
      console.log(action.payload.data.meals[0]);
      return action.payload.data.meals[0];
    default:
      return state;
  }
}
