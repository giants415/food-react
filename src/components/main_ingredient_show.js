import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainIngredientShow extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default connect(null, { fetchMainIngredient })(MainIngredientShow);
