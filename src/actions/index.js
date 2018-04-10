import axios from 'axios';

export const FETCH_RECIPES = 'fetch_recipes';

const ROOT_URL = 'https://www.themealdb.com/api/json/v1/1';

export function fetchRecipes() {
  // this will return the top 30 recipes on food2fork
  // this will serve as a landing page option since there will
  //   be no search at launch
  const request = axios.get(`${ROOT_URL}/random.php`);

  return {
    type: FETCH_RECIPES,
    payload: request
  };
}
