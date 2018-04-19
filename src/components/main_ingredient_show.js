import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

import SearchField from './search_field';

const cardStyle = {
  width: '15rem'
};

class MainIngredientShow extends Component {
  renderRecipes() {
    return _.map(this.props.recipes, recipe => {
      return (
        <div className="card" style={cardStyle}  key={recipe.idMeal}>
          <img className="card-img-top" src={recipe.strMealThumb} alt="Recipe" />
          <div className="card-body">
            <h5 className="card-title">{recipe.strMeal}</h5>
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
