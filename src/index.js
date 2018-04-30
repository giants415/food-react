import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import RecipeIndex from './components/recipe_index';
import MainIngredientShow from './components/main_ingredient_show';
import RecipeShow from './components/recipe_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const spacing = {
  marginRight: '10px'
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Link to="/" className="btn btn-success" style={spacing}>Home</Link>
        <Link to="/main-ingredient" className="btn btn-primary">Search By Main Ingredient</Link>
        <Switch>
          <Route path="/main-ingredient" component={MainIngredientShow} />
          <Route path="/:id" component={RecipeShow} />
          <Route path="/" component={RecipeIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
