import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.firstName.length < 5) {
      isError = true;
      errors.firstNameError = "Enter First Name";
    }

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
    }
  };

  render() {
    return (
      <div className="container validation-form-wrap">
        <form className="text-center">
          <TextField
            name="firstName"
            hintText="First name"
            className="form-field"
            value={this.state.firstName}
            onChange={e => this.change(e)}
            errorText={this.state.firstNameError}
            floatingLabelFixed
          />
          <TextField
            name="lastName"
            hintText="Last Name"
            className="form-field"
            value={this.state.lastName}
            onChange={e => this.change(e)}
            errorText={this.state.lastNameError}
            floatingLabelFixed
          />

          <TextField
            name="username"
            hintText="Username"
            className="form-field"
            value={this.state.username}
            onChange={e => this.change(e)}
            errorText={this.state.usernameError}
            floatingLabelFixed
          />
          <TextField
            name="email"
            hintText="Email"
            className="form-field"
            value={this.state.email}
            onChange={e => this.change(e)}
            errorText={this.state.emailError}
            floatingLabelFixed
          />

          <TextField
            name="password"
            hintText="Password"
            className="form-field"
            value={this.state.password}
            onChange={e => this.change(e)}
            errorText={this.state.passwordError}
            type="password"
            floatingLabelFixed
          />
          <RaisedButton className="form-btn" label="Submit" onClick={e => this.onSubmit(e)} primary />
        </form>
      </div>
    );
  }
}
