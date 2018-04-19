import axios from 'axios';

export const FETCH_RANDOM = 'fetch_random';
export const FETCH_MAIN_INGREDIENT = 'fetch_main_ingredient';

const ROOT_URL = 'https://www.themealdb.com/api/json/v1/1';

export function fetchRandom() {
  const request = axios.get(`${ROOT_URL}/random.php`);

  return {
    type: FETCH_RANDOM,
    payload: request
  };
}

export function fetchMainIngredient(mainIngredient, callback) {
  console.log(mainIngredient.search);

  const request = axios.get(`${ROOT_URL}/filter.php?i=${mainIngredient.search}`);

  return {
    type: FETCH_MAIN_INGREDIENT,
    payload: request
  };
}
