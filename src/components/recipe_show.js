import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../actions';

const imgStyle = {
  width: '400px'
}

class RecipeShow extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
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
        <h2>Selected Recipe: {recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} style={imgStyle}/>
        <br />
        <a className="btn btn-primary" href={recipe.strYoutube}>View on YouTube</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipes };
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);
