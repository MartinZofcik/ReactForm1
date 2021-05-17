import React from 'react';

import Typography from '@material-ui/core/Typography';
import { MainContainer } from './components/MainContainer';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useData } from './DataContext';
import Swal from 'sweetalert2';
import { PrimaryButton } from './components/PrimaryButton';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

export const Result = () => {
  const { data } = useData();
  const styles = useStyles();
  const entries = Object.entries(data);

  const onSubmit = async () => {
    const formData = new FormData();
    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    console.log(entries);
    Swal.fire('Great job!', "You've passed the challenge", 'success');

    // const response = await fetch('http://localhost:4000/', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (response.status == 200) {
    //   Swal.fire('Great job!', "You've passed the challenge", 'success');
    // }
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Results
      </Typography>
      <TableContainer className={styles.root} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell>{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
    </MainContainer>
  );
};
