import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError()}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" label="Enter Title:" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description:"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Please enter a valid title";
  }
  if (!formValues.description) {
    errors.description = "Please enter a valid description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
