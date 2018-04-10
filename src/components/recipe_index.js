import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class RecipeIndex extends Component {

  render() {
    return(
      <div>
        <h2>Recipe Index Page!</h2>
      </div>
    );
  }
}

export default RecipeIndex;
