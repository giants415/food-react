import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      </div>
    );
  }
}

export default connect(null, {  })(MainIngredientShow);
