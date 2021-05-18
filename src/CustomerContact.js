import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';

import { MainContainer } from './components/MainContainer';
import { Input } from './components/Input';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('First name is a required field'),
  phoneNumber: yup
    .number('Phone number should only contain numbers')
    .typeError('Phone number should only contain numbers')
});

export const CustomerContact = ({
  title,
  nextStep,
  prevStep,
  handleChange,
  values,
}) => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const goBack = () => {
    prevStep();
  };

  const onSubmit = () => {
    nextStep();
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="email"
          type="email"
          label="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" inputRef={register} name="hasPhone" />
          }
          label="Do you have phone?"
        />
        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
          />
        )}
        <PrimaryButton color="primary" type="submit">
          Next
        </PrimaryButton>
        <PrimaryButton color="default" onClick={goBack}>
          Back
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
};
