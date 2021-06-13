import React, { Component } from 'react';
import { CustomerAddress } from './CustomerAddress';
import { CustomerContact } from './CustomerContact';
import { IssueInfo } from './IssueInfo';
import { Result } from './Result';

export class EMEA_FORM extends Component {
  state = {
    step: 1,
    issue: '',
    diagnosticStatus: '',
    serviceTag: '',
    dispatchType: '',
    commodityRequested: '',
    paymentMethod: '',
    submitterEmail: '',
    name: '',
    phone: '',
    ext: '',
    customerEmail: '',
    bestTime: '',
    shippingLine1: '',
    shippingLine2: '',
    shippingCity: '',
    shippingState: '',
    shippingZIP: '',
    shippingCountry: '',
    billingLine1: '',
    billingLine2: '',
    billingCity: '',
    billingState: '',
    billingZIP: '',
    billingCountry: '',
    // repairUpgrade: true,
    // billingCheckbox: false,
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

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      issue,
      diagnosticStatus,
      serviceTag,
      dispatchType,
      commodityRequested,
      paymentMethod,
      submitterEmail,
      name,
      phone,
      ext,
      customerEmail,
      bestTime,
      shippingLine1,
      shippingLine2,
      shippingCity,
      shippingState,
      shippingZIP,
      shippingCountry,
      billingLine1,
      billingLine2,
      billingCity,
      billingState,
      billingZIP,
      billingCountry,
      // repairUpgrade,
      // billingCheckbox,
    } = this.state;

    const values = {
      step,
      issue,
      diagnosticStatus,
      serviceTag,
      dispatchType,
      commodityRequested,
      paymentMethod,
      submitterEmail,
      name,
      phone,
      ext,
      customerEmail,
      bestTime,
      shippingLine1,
      shippingLine2,
      shippingCity,
      shippingState,
      shippingZIP,
      shippingCountry,
      billingLine1,
      billingLine2,
      billingCity,
      billingState,
      billingZIP,
      billingCountry,
      // repairUpgrade,
      // billingCheckbox,
    };

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
          <CustomerAddress
            title="Shipping Address"
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
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
