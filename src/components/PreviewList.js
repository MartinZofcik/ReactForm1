import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export const PreviewList = ({ values }) => {
  return (
    <List>
      <ListItem divider>
        <ListItemText primary="Issue" secondary={values.firstName} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Diagnostic Status" secondary={values.lastName} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Email" secondary={values.email} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Phone Number" secondary={values.phoneNumber} />
      </ListItem>
    </List>
  );
};
