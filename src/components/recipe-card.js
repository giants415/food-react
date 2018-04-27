import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../actions';

const cardStyle = {
  width: '15rem',
  marginTop: '10px'
};

class RecipeCard extends Component {
  render() {
    const {
      name,
      thumbnail,
      id
    } = this.props;

    return (
      <div className="card" style={cardStyle}>
        <img className="card-img-top" src={thumbnail} alt="Recipe" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/${id}`}>
            View Recipe Details
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchRecipe })(RecipeCard);
