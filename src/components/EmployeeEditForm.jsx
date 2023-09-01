import { Paper } from '@material-ui/core';
import { Box,Typography } from '@mui/material';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React from 'react';

export const EmployeeEditForm = ({ employee }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper>
        <div>EmployeeEditForm</div>
        
      </Paper>
    </Box>
  );
};
