import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SearchField extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SearchInputForm'
});
