import _ from 'lodash';
import { FETCH_MAIN_INGREDIENT, FETCH_RECIPE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MAIN_INGREDIENT:
      return _.mapKeys(action.payload.data.meals, 'idMeal');
    case FETCH_RECIPE:
      const response = action.payload.data.meals;
      if (!response) {
        return false;
      } else {
        return response[0];
      }
    default:
      return state;
  }
}
