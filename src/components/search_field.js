import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchMainIngredient } from '../actions';

class SearchField extends Component {
  renderSearchField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    this.props.fetchMainIngredient(mainIngredient, () =>{
      this.props.history.push("/main-ingredient");
    });
  }


  render() {
    return (
      <form>
        <Field
          label="Search By A Main Ingredient"
          name="search"
          component={this.renderSearchField}
        />
      </form>
      <button type="submit" className="btn btn-primary">Search Recipes</button>
    );
  }
}

export default reduxForm({
  form: 'SearchInputForm'
});
