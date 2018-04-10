import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class RecipeIndex extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
    console.log(this.props.fetchRecipes())
  }

  render() {
    return(
      <div>
        <h2>Recipe Index Page!</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes: state.recipes };
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeIndex);
