import axios from 'axios';

export const FETCH_RANDOM = 'fetch_random';
export const FETCH_MAIN_INGREDIENT = 'fetch_main_ingredient';
export const FETCH_RECIPE = 'fetch_recipe';

const ROOT_URL = 'https://www.themealdb.com/api/json/v1/1';

export function fetchRandom() {
  const request = axios.get(`${ROOT_URL}/random.php`);

  return {
    type: FETCH_RANDOM,
    payload: request
  };
}

export function fetchMainIngredient(mainIngredient) {
  const request = axios.get(`${ROOT_URL}/filter.php?i=${mainIngredient.search}`);

  return {
    type: FETCH_MAIN_INGREDIENT,
    payload: request
  };
}

export function fetchRecipe(id) {
  const request = axios.get(`${ROOT_URL}/lookup.php?i=${id}`);

  return {
    type: FETCH_RECIPE,
    payload: request
  };
}
