import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';

import { MainContainer } from './components/MainContainer';
import { Input } from './components/Input';
import { useData } from './DataContext';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('First name is a required field'),
  phoneNumber: yup
    .number('Phone number should only contain numbers')
    .integer()
    .typeError('Phone number should only contain numbers'),
});

export const Step2 = () => {
  const { data, setValues } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    history.push('/result');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="email"
          type="email"
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              inputRef={register}
              name="hasPhone"
            />
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
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
          />
        )}
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
