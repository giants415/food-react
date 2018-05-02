import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

import RecipeCard from './recipe-card';
import SearchField from './search_field';

const thisStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

class MainIngredientShow extends Component {
  renderRecipes() {
    if (this.props.recipes.idMeal !== undefined) {
      return (
        <div>
          <h2>An error happened but its ok!</h2>
          <p>Please enter a main ingredient and click search</p>
        </div>
      );
    }
    return _.map(this.props.recipes, recipe => {
      return (
        <RecipeCard
          key={recipe.idMeal}
          id={recipe.idMeal}
          thumbnail={recipe.strMealThumb}
          name={recipe.strMeal}
          alt="random recipe display"
        />
      );
    })
  }

  render() {
    return (
      <div style={thisStyle}>
        <h2>Search for Recipes by Main Ingredient</h2>
        <SearchField />
        <div className="d-flex justify-content-between flex-row flex-wrap">
          {this.renderRecipes()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}


export default connect(mapStateToProps, { fetchMainIngredient })(MainIngredientShow);
