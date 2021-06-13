import React from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './components/Header';

import { MainContainer } from './components/MainContainer';
import { Input } from './components/Input';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';

const schema = yup.object().shape({
  // name: yup
  //   .string()
  //   .matches(/^([^*~^;:<>]*)$/, 'Name should have correct format')
  //   .required('Name is a required field'),
  // phone: yup
  //   .string()
  //   .matches(/^([0-9]*)$/, 'Phone number should only contain numbers')
  //   .required('Phone number is a required field')
  //   .test(
  //     'len',
  //     'Phone number must be exactly 10 characters long',
  //     (val) => val.length === 10
  //   ),
  // customerEmail: yup
  //   .string()
  //   .email('Customer Email should be a valid email')
  //   .required('Customer Email is a required field'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  select: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(5),
  },
}));

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
  const styles = useStyles();

  //const hasPhone = watch('hasPhone');

  const goBack = () => {
    prevStep();
  };

  const onSubmit = () => {
    nextStep();
  };

  return (
    <MainContainer>
      <Header title={title} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          //* *********************************************************************CUSTOMER NAME
          className={styles.root}
          ref={register}
          name="name"
          type="text"
          label="Name *"
          onChange={handleChange('name')}
          defaultValue={values.name}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />

        <Input
          //* *********************************************************************CUSTOMER PHONE
          className={styles.root}
          ref={register}
          name="phone"
          type="text"
          label="Phone *"
          onChange={handleChange('phone')}
          defaultValue={values.phone}
          error={!!errors.phone}
          helperText={errors?.phone?.message}
        />

        <Input
          //* *********************************************************************PHONE EXT
          className={styles.root}
          ref={register}
          name="ext"
          type="text"
          label="Phone Ext"
          onChange={handleChange('ext')}
          defaultValue={values.ext}
          error={!!errors.ext}
          helperText={errors?.ext?.message}
        />

        <Input
          //* *********************************************************************CUSTOMER EMAIL
          className={styles.root}
          ref={register}
          name="customerEmail"
          type="text"
          label="Customer Email *"
          onChange={handleChange('customerEmail')}
          defaultValue={values.customerEmail}
          error={!!errors.customerEmail}
          helperText={errors?.customerEmail?.message}
        />

        <Input
          //* *********************************************************************BEST TIME TO REACH
          className={styles.root}
          ref={register}
          name="bestTime"
          type="text"
          label="Best Time to Reach"
          onChange={handleChange('bestTime')}
          defaultValue={values.bestTime}
          error={!!errors.bestTime}
          helperText={errors?.bestTime?.message}
        />

        <PrimaryButton className={styles.button} color="primary" type="submit">
          Next
        </PrimaryButton>
        <PrimaryButton color="default" onClick={goBack}>
          Back
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
};
