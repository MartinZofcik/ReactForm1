import React, { useState } from 'react';
import { Input } from './components/Input';
import { MainContainer } from './components/MainContainer';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';
import { Header } from './components/Header';

const schema = yup.object().shape({
  // name: yup
  //   .string()
  //   .matches(/^([^*~^;:<>]*)$/, 'Name should have correct format')
  //   .required('Name is a required field'),
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

const countries = [
  'Germany',
  'Switzerland',
  'Austria',
  'UK',
  'Ireland',
  'South Africa',
  'France',
  'Belgium',
  'Netherlands',
  'Luxemburg',
  'Greece',
  'Italy',
  'Spain',
  'Denmark',
  'Sweden',
  'Norway',
  'Finland',
  'Slovakia',
  'Czech Republic',
  'Poland',
];

export const CustomerAddress = ({
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

  const [billingCheck, setBillingCheck] = useState(false);

  const handleBillingCheck = () => {
    setBillingCheck(!billingCheck);
  };

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
          //* *********************************************************************SH LINE1
          className={styles.root}
          ref={register}
          name="shippingLine1"
          type="text"
          label="Line 1 *"
          onChange={handleChange('shippingLine1')}
          defaultValue={values.shippingLine1}
          error={!!errors.shippingLine1}
          helperText={errors?.shippingLine1?.message}
        />

        <Input
          //* *********************************************************************SH LINE2
          className={styles.root}
          ref={register}
          name="shippingLine2"
          type="text"
          label="Line 2"
          onChange={handleChange('shippingLine2')}
          defaultValue={values.shippingLine2}
          error={!!errors.shippingLine2}
          helperText={errors?.shippingLine2?.message}
        />

        <Input
          //* *********************************************************************SH CITY
          className={styles.root}
          ref={register}
          name="shippingCity"
          type="text"
          label="City *"
          onChange={handleChange('shippingCity')}
          defaultValue={values.shippingCity}
          error={!!errors.shippingCity}
          helperText={errors?.shippingCity?.message}
        />

        <Input
          //* *********************************************************************SH STATE
          className={styles.root}
          ref={register}
          name="shippingState"
          type="text"
          label="State *"
          onChange={handleChange('shippingState')}
          defaultValue={values.shippingState}
          error={!!errors.shippingState}
          helperText={errors?.shippingState?.message}
        />

        <Input
          //* *********************************************************************SH ZIP
          className={styles.root}
          ref={register}
          name="shippingZIP"
          type="text"
          label="Zip/Postal (not APO/FPO) *"
          onChange={handleChange('shippingZIP')}
          defaultValue={values.shippingZIP}
          error={!!errors.shippingZIP}
          helperText={errors?.shippingZIP?.message}
        />

        <FormControl
          //* *********************************************************************SH COUNTRY
          //required
          // variant="outlined"
          className={styles.root}
        >
          <InputLabel>Country *</InputLabel>
          <Select
            ref={register}
            name="shippingCountry"
            value={values.shippingCountry}
            onChange={handleChange('shippingCountry')}
            label="Country *"
            defaultValue=""
            error={!!errors.shippingCountry}
          >
            {countries.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          style={{ marginTop: '15px', marginBottom: '15px' }}
          control={
            <Checkbox
              checked={billingCheck}
              onChange={handleBillingCheck}
              name="BillingAddress"
              color="primary"
            />
          }
          label="Billing Address is different from Shipping"
        />

        {billingCheck && (
          <div>
            <Typography component="h3" variant="h4">
              Billing Address
            </Typography>
            <Input
              //* *********************************************************************SH LINE1
              className={styles.root}
              ref={register}
              name="billingLine1"
              type="text"
              label="Line 1"
              onChange={handleChange('billingLine1')}
              defaultValue={values.billingLine1}
              error={!!errors.billingLine1}
              helperText={errors?.billingLine1?.message}
            />

            <Input
              //* *********************************************************************SH LINE2
              className={styles.root}
              ref={register}
              name="billingLine2"
              type="text"
              label="Line 2"
              onChange={handleChange('billingLine2')}
              defaultValue={values.billingLine2}
              error={!!errors.billingLine2}
              helperText={errors?.billingLine2?.message}
            />

            <Input
              //* *********************************************************************SH CITY
              className={styles.root}
              ref={register}
              name="billingCity"
              type="text"
              label="City"
              onChange={handleChange('billingCity')}
              defaultValue={values.billingCity}
              error={!!errors.billingCity}
              helperText={errors?.billingCity?.message}
            />

            <Input
              //* *********************************************************************SH STATE
              className={styles.root}
              ref={register}
              name="billingState"
              type="text"
              label="State"
              onChange={handleChange('billingState')}
              defaultValue={values.billingState}
              error={!!errors.billingState}
              helperText={errors?.billingState?.message}
            />

            <Input
              //* *********************************************************************SH ZIP
              className={styles.root}
              ref={register}
              name="billingZIP"
              type="text"
              label="Zip/Postal (not APO/FPO)"
              onChange={handleChange('billingZIP')}
              defaultValue={values.billingZIP}
              error={!!errors.billingZIP}
              helperText={errors?.billingZIP?.message}
            />

            <FormControl
              //* *********************************************************************SH COUNTRY
              //required
              // variant="outlined"
              className={styles.root}
            >
              <InputLabel>Country</InputLabel>
              <Select
                ref={register}
                name="billingCountry"
                value={values.billingCountry}
                onChange={handleChange('billingCountry')}
                label="Country"
                defaultValue=""
                error={!!errors.billingCountry}
              >
                {countries.map((country) => (
                  <MenuItem value={country} key={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}

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
