import React from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Issue should not contain numbers')
    .required('Issue is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Diagnostic status should not contain numbers')
    .required('Diagnostic status is a required field'),
  age: yup.array().min(1),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

export const IssueInfo = ({ title, nextStep, handleChange, values }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const styles = useStyles();

  const onSubmit = () => {
    // if (values.age === '') {
    //   return;
    // } else {
    console.log(values.age);
    nextStep();
    //}
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="firstName"
          type="text"
          label="Issue"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          name="lastName"
          type="text"
          label="Diagnostic status"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        {/* <FormControl variant="outlined" fullWidth className={styles.root}>
          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select
            //native
            //value=""
            onChange={handleChange('age')}
            label="Age"
            name="age"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl> */}
        <PrimaryButton color="primary" type="submit">
          Next
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
};
