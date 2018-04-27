import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

const inputStyle = {
  width: '300px'
};

const newStyle = {
  display: 'flex'
};

const button = {
  height: '38px',
  marginTop: '32px'
}

class SearchField extends Component {
  renderSearchField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          style={inputStyle}
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(mainIngredient) {
    this.props.fetchMainIngredient(mainIngredient);
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form style={newStyle} onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search for Recipes by Main Ingredient"
          name="search"
          component={this.renderSearchField}
        />
      <button style={button} type="submit" className="btn btn-primary">Search Recipes</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SearchInputForm'
})(
  connect(null,{ fetchMainIngredient })(SearchField)
);
