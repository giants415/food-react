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
    let random = this.props.randomRecipe;
    if (!random) {
      return <div>Recipe is cooking...</div>;
    }
    return (
      <RecipeCard
        key={random.idMeal}
        id={random.idMeal}
        thumbnail={random.strMealThumb}
        name={random.strMeal}
        alt="random recipe display"
      />
    );
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
  return { randomRecipe: state.randomRecipe };
}

export default connect(mapStateToProps, { fetchRandom })(RecipeIndex);
