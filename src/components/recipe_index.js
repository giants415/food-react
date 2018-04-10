import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class RecipeIndex extends Component {
  componentDidMount() {
    console.log(this.props.fetchRecipes());
  }

  render() {
    return(
      <div>
        <h2>Recipe Index Page!</h2>
      </div>
    );
  }
}

export default connect(null, { fetchRecipes })(RecipeIndex);
