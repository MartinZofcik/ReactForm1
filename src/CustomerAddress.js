import React from 'react';
import { Input } from './components/Input';
import { MainContainer } from './components/MainContainer';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';

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

const countries = ['UK', 'Spain', 'France'];

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

  //const hasPhone = watch('hasPhone');

  const goBack = () => {
    prevStep();
  };

  const onSubmit = () => {
    nextStep();
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
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
              <MenuItem value={country}>{country}</MenuItem>
            ))}
            {/* <MenuItem value={'Germany'}>Germany</MenuItem>
            <MenuItem value={'Switzerland'}>Switzerland</MenuItem>
            <MenuItem value={'Austria'}>Austria</MenuItem>
            <MenuItem value={'UK'}>UK</MenuItem>
            <MenuItem value={'Ireland'}>Ireland</MenuItem>
            <MenuItem value={'South Africa'}>South Africa</MenuItem>
            <MenuItem value={'France'}>France</MenuItem>
            <MenuItem value={'Belgium'}>Belgium</MenuItem>
            <MenuItem value={'Netherlands'}>Netherlands</MenuItem>
            <MenuItem value={'Luxemburg'}>Luxemburg</MenuItem>
            <MenuItem value={'Greece'}>Greece</MenuItem>
            <MenuItem value={'Italy'}>Italy</MenuItem>
            <MenuItem value={'Spain'}>Spain</MenuItem>
            <MenuItem value={'Denmark'}>Denmark</MenuItem>
            <MenuItem value={'Sweden'}>Sweden</MenuItem>
            <MenuItem value={'Norway'}>Norway</MenuItem>
            <MenuItem value={'Finland'}>Finland</MenuItem>
            <MenuItem value={'Slovakia'}>Slovakia</MenuItem>
            <MenuItem value={'Czech Republic'}>Czech Republic</MenuItem>
            <MenuItem value={'Poland'}>Poland</MenuItem> */}
          </Select>
        </FormControl>

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
