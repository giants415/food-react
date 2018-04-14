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

  onSubmit(mainIngredient) {
    this.props.fetchMainIngredient(mainIngredient, () =>{
      this.props.history.push("/main-ingredient");
    });
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
