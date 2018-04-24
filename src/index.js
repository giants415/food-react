import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import RecipeIndex from './components/recipe_index';
import MainIngredientShow from './components/main_ingredient_show';
import RecipeShow from './components/recipe_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container-fluid">
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
