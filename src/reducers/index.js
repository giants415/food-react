import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipesReducer from './reducer_recipes';
import RandomReducer from './reducer_random';

const rootReducer = combineReducers({
  randomRecipe: RandomReducer,
  recipes: RecipesReducer,
  form: formReducer
});

export default rootReducer;
