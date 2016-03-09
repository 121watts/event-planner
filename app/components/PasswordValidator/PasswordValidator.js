import React, {Component} from 'react';
import classNames from 'classnames';

import './password-validator.css';

export default class PasswordValidator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {password} = this.props
    const isLongEnough = password.length > 8
    const hasUpperAndLowercase = password.match(/[A-Z]/) && password.match(/[a-z]/)
    const hasNumber = password.match(/[0-9]/)
    const allMatch = isLongEnough && hasUpperAndLowercase && hasNumber

    return (
      <div className={classNames("password-validator", {'all-green': allMatch})}>
        <div className={classNames({"error": !isLongEnough}, {"success": isLongEnough})}>
          <div className="icon icon-green-check" />
          <div className="message">8 or more characters </div>
        </div>

        <div className={classNames({"error": !hasUpperAndLowercase}, {"success": hasUpperAndLowercase})}>
          <div className="icon icon-green-check" />
          <div className="message">Upper and lowercase</div>
        </div>

        <div className={classNames({"error": !hasNumber}, {"success": hasNumber})}>
          <div className="icon icon-green-check" />
          <div className="message">At least 1 number</div>
        </div>
      </div>
    );
  }
}
