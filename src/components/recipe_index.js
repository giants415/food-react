import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

import RecipeCard from './recipe-card';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}


class RecipeIndex extends Component {
  componentDidMount() {
    this.props.fetchRandom();
  }

  renderRandomRecipe() {
    return _.map(this.props.recipes, recipe => {
      if (!recipe) {
        return <div>Recipe is cooking...</div>;
      }
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
      <div style={style}>
        <h2>Welcome to Recipe Finder!</h2>
        <h4>Random Recipe of the Moment</h4>
        {this.renderRandomRecipe()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes: state.recipes };
}

export default connect(mapStateToProps, { fetchRandom })(RecipeIndex);
