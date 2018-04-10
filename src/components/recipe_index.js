import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class RecipeIndex extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderRandomRecipe() {
    return _.map(this.props.recipes, recipe => {
      return (
        <p key={recipe.id}>
          {recipe.strMeal}
        </p>
      );
    })
  }

  render() {
    return(
      <div>
        <h2>Recipe Index Page!</h2>
        <div>
          <h4>Random Recipe of the Moment</h4>
          <p>{this.renderRandomRecipe()}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes: state.recipes };
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeIndex);
