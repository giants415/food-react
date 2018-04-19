import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

import SearchField from './search_field';

class MainIngredientShow extends Component {
  renderRecipes() {
    return _.map(this.props.recipes, recipe => {
      return (
        <div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Main Ingredient Search Page</h2>
        <SearchField />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}


export default connect(mapStateToProps, { fetchMainIngredient })(MainIngredientShow);
