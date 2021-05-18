import React, { Component } from 'react';
import { CustomerContact } from './CustomerContact';
import { IssueInfo } from './IssueInfo';
import { Result } from './Result';

export class EMEA_FORM extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber: '',
    hasPhone: true,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phoneNumber } = this.state;
    const values = { firstName, lastName, email, phoneNumber };

    switch (step) {
      case 1:
        return (
          <IssueInfo
            title="Issue Info"
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CustomerContact
            title="Customer Contact"
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Result
            title="Confirmation"
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default EMEA_FORM;
