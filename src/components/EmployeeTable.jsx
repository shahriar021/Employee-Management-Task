import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useEmployeeData } from "../hooks";
import { EmployeeActions } from "./EmployeeActions";

export const EmployeeTable = () => {
  const { employees, setEmployees } = useEmployeeData();

  const getRowData = () =>
    employees.map((employee) => ({
      ...employee,
      action: employee,
    }));

  const handleEmployeeUpdate = (editedEmployee) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === editedEmployee.id) {
        return editedEmployee;
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const handleRemove = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const style = {
    padding: "3.5%",
    boxShadow: 24,
  };

  return (
    <Box sx={style}>
      <DataGrid
        columns={[
          { field: "id", headerName: "ID", width: "100", filterable: false },
          {
            field: "name",
            headerName: "Name",
            width: "250",
            filterable: false,
          },
          { field: "age", headerName: "Age", width: "250", filterable: false },
          { field: "position", headerName: "Position", width: "250" },
          { field: "department", headerName: "Department", width: "250" },
          // { field: 'phone', headerName: 'Phone', width: '250' },
          // { field: 'address', headerName: 'Address', width: '250' },
          {
            align: "center",
            headerAlign: "center",
            field: "action",
            headerName: "Action",
            width: "400",
            filterable: false,
            renderCell: (params) => (
              <EmployeeActions
                employee={params.value}
                id={employees.id}
                onRemove={handleRemove}
                onUpdateEmployee={handleEmployeeUpdate}
              />
            ),
          },
        ]}
        rows={getRowData()}
      />
    </Box>
  );
};
