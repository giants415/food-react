import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

import RecipeCard from './recipe-card';


class RecipeIndex extends Component {
  componentDidMount() {
    this.props.fetchRandom();
  }

  renderRandomRecipe() {
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
    return(
      <div className="text-center">
        <h2>Recipe Index Page!</h2>
        <div>
          <h4>Random Recipe of the Moment</h4>
          {this.renderRandomRecipe()}
        </div>
        <Link to="/main-ingredient" className="btn btn-primary">Search By Main Ingredient</Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes: state.recipes };
}

export default connect(mapStateToProps, { fetchRandom })(RecipeIndex);
