import React, {Component, PropTypes} from 'react';
import PasswordValidator from 'components/PasswordValidator/PasswordValidator';
import ReactDOM from 'react-dom';

import './register.css';

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPasswordFocused: false,
      password: ""
    }
  }

  render() {
    const {password} = this.state;

    return (
      <form className="form-register" onSubmit={this.onRegisterClick} autoComplete="on">
        <div className="form-register-with-email">
          <div className="form-white-background">

            <div className="form-title-row">
              <h1>Create an account</h1>
            </div>

            <div className="form-row">
              <label htmlFor="first-name">
                <span>Name</span>
                <input placeholder="first name" type="text" name="first-name" id="name" autoComplete="given-name" autoFocus required />
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="email">
                <span>Email</span>
                <input placeholder="name@example.com" type="email" name="email" id="email" autoComplete="email" required />
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="company">
                <span>Company</span>
                <input placeholder="(optional) where do you work?" type="text" name="company" id="company" />
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="password">
                <span>Password</span>
                <input
                  ref="password"
                  type="password"
                  name="password"
                  id="password"
                  onBlur={this.removePasswordValidation}
                  onFocus={this.renderPasswordValidation}
                  onChange={this.handlePasswordChange}
                  required
                />
                <PasswordValidator password={password} />
              </label>
            </div>

            <div className="form-row">
              <button type="submit" >Register</button>
            </div>
          </div>
          <a href="#" className="form-log-in-with-existing">Already have an account? Login here &rarr;</a>
        </div>
      </form>
    );
  }

  onRegisterClick = (e) => {
    e.preventDefault()

    this.props.onRegisterClick()
  };

  renderPasswordValidation = () => {
    this.setState({isPasswordFocused: true})
  };

  removePasswordValidation = () => {
    this.setState({isPasswordFocused: false})
  };

  handlePasswordChange = () => {
    const password = ReactDOM.findDOMNode(this.refs.password)
    this.setState({password: password.value || ""})
  };

}

Register.propTypes = {onRegisterClick: PropTypes.func.isRequired}
