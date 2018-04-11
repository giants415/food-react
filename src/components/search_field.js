import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SearchField extends Component {
  render() {
    return (
      <form>
        <Field
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
