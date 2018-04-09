import axios from 'axios';

export const FETCH_RECIPES = 'fetch_recipes';

export function fetchRecipes() {
  const request = axios.get()

  return {
    type: FETCH_RECIPES
  };
}
