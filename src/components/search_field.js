import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SearchField extends Component {
  renderSearchField(field) {
    return (
      <div>
        <label>{field.label}</label>
      </div>
    )
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
    );
  }
}

export default reduxForm({
  form: 'SearchInputForm'
});
