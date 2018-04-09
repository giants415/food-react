import axios from 'axios';

export const FETCH_RECIPES = 'fetch_recipes';

const ROOT_URL = 'http://food2fork.com/api/search';

export function fetchRecipes() {
  const request = axios.get()

  return {
    type: FETCH_RECIPES
  };
}
