import React, {Component} from 'react';
import Register from 'components/Register/Register';
import EventPlanner from 'components/EventPlanner/EventPlanner';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      isRegistered: true
    }
  }

  render() {
    return this.state.isRegistered ? <EventPlanner /> : <Register onRegisterClick={this.handleRegister}/>;
  }

  handleRegister = () => {
    this.setState({isRegistered: true})
  };
}
