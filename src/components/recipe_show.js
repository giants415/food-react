import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../actions';

const imgStyle = {
  width: '400px'
}

const row = {
  flexDirection: 'column'
}

class RecipeShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchRecipe(id);
  }

  renderIngredients(recipe) {
    const ingredients = [];
    const measurements = [];
    for (var key in recipe) {
      let checker = key.slice(0,13);
      let measureChecker = key.slice(0,9);
      if (checker === 'strIngredient' && recipe[key] !== '') {
        ingredients.push(recipe[key]);
      }
      if (measureChecker === 'strMeasure' && recipe[key] !== '') {
        measurements.push(recipe[key]);
      }
    }
    const ingredientItems = ingredients.map((ingredient) => {
      return (
        <p key={ingredient}>{ingredient}</p>
      )
    });
    const measureItems = measurements.map((measurement) => {
      return (
        <p key={measurement}>{measurement}</p>
      )
    });
    return ingredientItems, measureItems;
  }

  render() {
    const { recipe } = this.props;
    console.log(this.props.recipe);

    if (!recipe) {
      return (
        <div>
          <h3>
            Sorry, the recipe you are looking for does not exist.
            <br/>
            Please retry your search
          </h3>
          <Link to="/main-ingredient" className="btn btn-warning">Search</Link>
        </div>
      );
    }

    return(
      <div>
        <div className="row">
          <div className="col-lg-6" style={row}>
            <h2>Selected Recipe:</h2>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} style={imgStyle} alt={recipe.strMeal}/>
            <br />
            <a className="btn btn-primary" href={recipe.strYoutube}>View on YouTube</a>
            <h4>Directions</h4>
            <p>
              {recipe.strInstructions}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <h4>Ingredients</h4>
            {this.renderIngredients(recipe)}
          </div>
          <div className="col-lg-3">
            <h4>Measurements</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipes };
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);
