import React, { Component } from 'react';
import { connect } from 'react-redux';

const cardStyle = {
  width: '15rem',
  margin: '0 10px 10px 10px'
};

class Recipe extends Component {
  viewRecipe = () => {
    console.log(this.props.id);
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
          <button className="btn btn-outline-primary" onClick={this.viewRecipe}>
            View Recipe Details
          </button>
        </div>
      </div>
    );
  }
}

export default Recipe;
