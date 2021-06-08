import React from 'react';

import Typography from '@material-ui/core/Typography';
import { MainContainer } from './components/MainContainer';
import Swal from 'sweetalert2';
import { PrimaryButton } from './components/PrimaryButton';
import { PreviewList } from './components/PreviewList';

export const Result = ({ title, prevStep, handleChange, values }) => {
  const goBack = () => {
    prevStep();
  };
  const zofco = 'Martin';

  const onSubmit = () => {
    // Swal.fire(
    //   'Copied to clipboard (in future)',
    //   'Please do not alter the output in SFDC',
    //   'success'
    // );
    navigator.clipboard.writeText(final);
  };
  const final = `Issue : ${zofco} \n Diagnostic: ${values.diagnosticStatus}`;

  return (
    <MainContainer>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      <PreviewList values={values} />
      <PrimaryButton color="primary" onClick={onSubmit}>
        Copy
      </PrimaryButton>
      <PrimaryButton color="default" onClick={goBack}>
        Back
      </PrimaryButton>
    </MainContainer>
  );
};
