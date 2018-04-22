import React, { Component } from 'react';
import { connect } from 'react-redux';

const cardStyle = {
  width: '15rem',
  margin: '0 10px 10px 10px'
};

class Recipe extends Component {
  viewRecipe(selected_recipe_id) {
    console.log(selected_recipe_id);
  }

  render() {
    const {
      name,
      thumbnail
    } = this.props;

    return (
      <div className="card" style={cardStyle}>
        <img className="card-img-top" src={thumbnail} alt="Recipe" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-outline-primary" onClick={this.onViewDetails}>
            View Recipe Details
          </button>
        </div>
      </div>
    );
  }
}
