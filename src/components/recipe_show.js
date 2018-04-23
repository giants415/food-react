import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions';

class RecipeShow extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.props.fetchRecipe(id);
    console.log('props', this.props);
  }

  render() {
    const { recipe } = this.props;

    if (!recipe) {
      return <div>Loading...</div>;
    }

    return(
      <div>
        <h2>Selected Recipe:</h2>
        <h3>{recipe.strMeal}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipes };
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);
