import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';


class RecipeIndex extends Component {
  componentDidMount() {
    this.props.fetchRandom();
  }

  renderRandomRecipe() {
    return _.map(this.props.recipes, recipe => {
      return (
        <div key={recipe.idMeal}>
          <h5><a href={recipe.strSource}>{recipe.strMeal}</a></h5>
          <img height="300px" src={recipe.strMealThumb} alt="random recipe display"/>
        </div>
      );
    })
  }

  render() {
    return(
      <div>
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
