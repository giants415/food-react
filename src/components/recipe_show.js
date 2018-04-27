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
      <div className="row">
        <Link to="/" className="btn btn-danger">Home</Link>
        <div className="col-lg-6" style={row}>
          <h2>Selected Recipe:</h2>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} style={imgStyle}/>
          <br />
          <a className="btn btn-primary" href={recipe.strYoutube}>View on YouTube</a>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-3">
            <h4>Ingredients</h4>
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
