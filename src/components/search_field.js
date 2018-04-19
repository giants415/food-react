import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

const inputStyle = {
  width: '300px'
};

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
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search By A Main Ingredient"
          name="search"
          component={this.renderSearchField}
        />
        <button type="submit" className="btn btn-primary">Search Recipes</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SearchInputForm'
})(
  connect(null,{ fetchMainIngredient })(SearchField)
);
