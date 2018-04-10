import axios from 'axios';
import KEY from '../keys';

export const FETCH_RECIPES = 'fetch_recipes';

const ROOT_URL = 'http://food2fork.com/api/search';
const API_KEY = KEY;

export function fetchRecipes() {
  // this will return the top 30 recipes on food2fork
  // this will serve as a landing page option since there will
  //   be no search at launch
  const request = axios.get(`${ROOT_URL}?key=${API_KEY}`);

  return {
    type: FETCH_RECIPES,
    payload: request
  };
}
