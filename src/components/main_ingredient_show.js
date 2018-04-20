import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

import SearchField from './search_field';

const cardStyle = {
  width: '15rem',
  margin: '0 10px 10px 10px'
};

class MainIngredientShow extends Component {
  viewRecipe(selected_recipe_id) {
    console.log(selected_recipe_id);
  }

  renderRecipes() {
    return _.map(this.props.recipes, recipe => {
      return (
        <div className="card" style={cardStyle}  key={recipe.idMeal}>
          <img className="card-img-top" src={recipe.strMealThumb} alt="Recipe" />
          <div className="card-body">
            <h5 className="card-title">{recipe.strMeal}</h5>
            <button className="btn btn-outline-primary" onClick={() => this.viewRecipe(recipe.idMeal)}>
              View Recipe Details
            </button>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.recipes);
    return (
      <div>
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
