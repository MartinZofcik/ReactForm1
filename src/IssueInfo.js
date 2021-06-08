import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Header from './components/Header';
import MultipleSelect from './components/MultiSelect';

const schema = yup.object().shape({
  // issue: yup
  //   .string()
  //   .matches(/^([^0-9]*)$/, 'Issue should not contain numbers')
  //   .required('Issue is a required field'),
  repairUpgrade: yup.boolean(),

  issue: yup.string().when('repairUpgrade', {
    is: (repairUpgrade) => true,
    then: yup.string().required('Issue is a required field'),
    otherwise: yup.string(),
  }),

  // diagnosticStatus: yup
  //   .string()
  //   .matches(/^([^0-9]*)$/, 'Diagnostic status should not contain numbers')
  //   .required('Diagnostic status is a required field'),
  // serviceTag: yup.string().required('Service Tag is a required field'),
  // // dispatchType: yup.string().required(),
  // submitterEmail: yup
  //   .string()
  //   .email('Submitter Email should be a valid email')
  //   .required('Submitter Email is a required field'),
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

export const IssueInfo = ({ title, nextStep, handleChange, values }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const styles = useStyles();

  const onSubmit = () => {
    nextStep();
  };

  const [repairUpgrade, setrepairUpgrade] = useState(true);

  const handleRepair = (event) => {
    setrepairUpgrade(event.target.value);
  };

  return (
    <MainContainer>
      {/* <Header /> */}
      <Typography component="h2" variant="h4">
        {title}
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          //* *********************************************************************REQUEST TYPE
          required
          // variant="outlined"
          className={styles.root}
        >
          <InputLabel>Request Type</InputLabel>
          <Select
            ref={register}
            name="repairUpgrade"
            onChange={handleChange('repairUpgrade')}
            label="Request Type"
            defaultValue={true}
          >
            <MenuItem value={true}>Repair/Upgrade</MenuItem>
            <MenuItem value={false}>Spare Parts/S&P/Kits</MenuItem>
          </Select>
        </FormControl>

        {values.repairUpgrade && (
          <div className="repair-upgrade">
            <Input
              //* *********************************************************************ISSUE
              className={styles.root}
              ref={register}
              name="issue"
              type="text"
              label="Issue"
              onChange={handleChange('issue')}
              defaultValue={values.issue}
              error={!!errors.issue}
              helperText={errors?.issue?.message}
            />

            <Input
              //* *********************************************************************DIAGNOSTIC STATUS
              className={styles.root}
              ref={register}
              name="diagnosticStatus"
              type="text"
              label="Diagnostic status (passed/error#) *"
              onChange={handleChange('diagnosticStatus')}
              defaultValue={values.diagnosticStatus}
              error={!!errors.diagnosticStatus}
              helperText={errors?.diagnosticStatus?.message}
            />

            <Input
              //* *********************************************************************SERVICE TAG
              className={styles.root}
              ref={register}
              name="serviceTag"
              type="text"
              label="Service Tag *"
              onChange={handleChange('serviceTag')}
              defaultValue={values.serviceTag}
              error={!!errors.serviceTag}
              helperText={errors?.serviceTag?.message}
            />

            <FormControl
              //* *********************************************************************DISPATCH TYPE
              //required
              // variant="outlined"
              className={styles.root}
            >
              <InputLabel>Dispatch Type</InputLabel>
              <Select
                ref={register}
                name="dispatchType"
                value={values.dispatchType}
                onChange={handleChange('dispatchType')}
                label="Dispatch Type"
                defaultValue=""
                error={!!errors.dispatchType}
              >
                {/* <MenuItem value=""><em>None</em></MenuItem> */
                /* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
                <MenuItem value={'Parts Only'}>Parts Only</MenuItem>
                <MenuItem value={'Onsite'}>Onsite</MenuItem>
                <MenuItem value={'Depot Diagnostics'}>
                  Depot Diagnostics
                </MenuItem>
                <MenuItem value={'Depot'}>Depot</MenuItem>
                <MenuItem value={'Labor Only'}>Labor Only</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>

            <MultipleSelect
            //* *********************************************************************COMMODITY REQUESTED
            // onChange={handleChange}
            // values={values}
            />
          </div>
        )}

        <FormControl
          //* *********************************************************************PAYMENT METHOD
          //required
          //variant="outlined"
          className={styles.root}
        >
          <InputLabel>Payment Method</InputLabel>
          <Select
            ref={register}
            name="paymentMethod"
            value={values.paymentMethod}
            onChange={handleChange('paymentMethod')}
            label="Payment Method"
            defaultValue=""
            //error={!!errors.paymentMethod}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={'Credit/Debit Card'}>Credit/Debit Card</MenuItem>
            <MenuItem value={'PO'}>PO</MenuItem>
            <MenuItem value={'DPA'}>DPA</MenuItem>
            <MenuItem value={'Undecided/Unknown'}>Undecided/Unknown</MenuItem>
          </Select>
        </FormControl>

        <Input
          //* *********************************************************************SUBMITTER EMAIL ADDRESS
          ref={register}
          name="submitterEmail"
          type="text"
          label="Submitter Email Address *"
          onChange={handleChange('submitterEmail')}
          defaultValue={values.submitterEmail}
          error={!!errors.submitterEmail}
          helperText={errors?.submitterEmail?.message}
        />

        <PrimaryButton className={styles.button} color="primary" type="submit">
          Next
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
};
