import React from 'react';

import Typography from '@material-ui/core/Typography';
import { MainContainer } from './components/MainContainer';
import Swal from 'sweetalert2';
import { PrimaryButton } from './components/PrimaryButton';
import { PreviewList } from './components/PreviewList';
import { Header } from './components/Header';

export const Result = ({ title, prevStep, handleChange, values }) => {
  const goBack = () => {
    prevStep();
  };

  const output = `Please educate customer about online quote from OOP in 24 hrs. (M-F)
Type of Request: TOTAL SOLUTIONS
Submitter: ${values.submitterEmail}
Issue: ${values.issue}
Diagnostic Status: ${values.diagnosticStatus}
Commodity Requested: ${values.commodityRequested}
Dispatch Type: ${values.dispatchType}
Payment Method: ${values.paymentMethod}\n
Service Tag: ${values.serviceTag}\n
Customer Name: ${values.name}
Customer Phone: ${values.phone} ext: ${values.ext}
Customer Email: ${values.customerEmail}
Best Time To Reach: ${values.bestTime}\n
Shipping address:
Shipping Line1: ${values.shippingLine1}
Shipping Line2: ${values.shippingLine2}
Shipping City: ${values.shippingCity}
Shipping State: ${values.shippingState}
Shipping PostalCode: ${values.shippingZIP}
Shipping Country: ${values.shippingCountry}\n
Billing address:
Billing Line1: ${values.billingLine1}
Billing Line2: ${values.billingLine2}
Billing City: ${values.billingCity}
Billing State: ${values.billingState}
Billing PostalCode: ${values.billingZIP}
Billing Country: ${values.billingCountry}\n`;

  const onSubmit = () => {
    Swal.fire(
      'Copied to clipboard',
      'Please do NOT alter the output in SFDC',
      'success'
    );
    navigator.clipboard.writeText(output);
  };

  const reloadPage = () => {
    window.location.reload(false);
  };

  return (
    <MainContainer>
      <Header title={title} />

      <PreviewList values={values} />
      <PrimaryButton color="primary" onClick={onSubmit}>
        Copy
      </PrimaryButton>
      <PrimaryButton color="default" onClick={goBack}>
        Back
      </PrimaryButton>
      <PrimaryButton
        style={{ marginTop: '50px' }}
        color="secondary"
        onClick={reloadPage}
      >
        Reset
      </PrimaryButton>
    </MainContainer>
  );
};
