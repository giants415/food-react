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
    console.log(this.props.recipes);
    return (
      <div style={thisStyle}>
        <h2>Main Ingredient Search Page</h2>
        <SearchField />
        <div className="d-flex flex-row flex-wrap">
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
