import React, {Component} from 'react';

import './register.css';

export default class Register extends Component {
   constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-register" method="post" action="#">
        <div className="form-register-with-email">
          <div className="form-white-background">

            <div className="form-title-row">
              <h1>Create an account</h1>
            </div>

            <div className="form-row">
              <label for="name">
                <span>Name</span>
                <input ref="name" type="text" name="name" id="name" autoFocus required />
              </label>
            </div>

            <div className="form-row">
              <label for="email">
                <span>Email</span>
                <input type="email" name="email" id="email" required />
              </label>
            </div>

            <div className="form-row">
              <label for="password">
                <span>Password</span>
                <input type="password" name="password" id="password" onFoucs={this.renderPasswordValidation} required />
              </label>
            </div>

            <div className="form-row">
              <button type="submit">Register</button>
            </div>
          </div>
          <a href="#" className="form-log-in-with-existing">Already have an account? Login here &rarr;</a>
        </div>
      </form>
    );
  }
}
