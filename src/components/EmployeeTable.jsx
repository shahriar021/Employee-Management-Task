import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useEmployeeData } from '../hooks';
import { EmployeeActions } from './EmployeeActions';

export const EmployeeTable = () => {
  const { employees } = useEmployeeData();

  const getRowData = () =>
    employees.map((employee) => ({
      ...employee,
      action: employee,
    }));

  return (
    <Box>
      <DataGrid
        columns={[
          { field: 'id', headerName: 'ID' },
          { field: 'name', headerName: 'Name', width: '300' },
          { field: 'age', headerName: 'Age' },
          { field: 'position', headerName: 'Position', width: '300' },
          { field: 'department', headerName: 'Department', width: '250' },
          {
            align: 'center',
            headerAlign: 'center',
            field: 'action',
            headerName: 'Action',
            width: '400',
            renderCell: (params) => <EmployeeActions employee={params.value} />,
          },
        ]}
        rows={getRowData()}
      />
    </Box>
  );
};
