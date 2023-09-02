import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export const EmployeeDelete = ({ employee, onDelete }) => {
  const handleDelete = () => {
    // Call the onDelete function passed from the parent component
    // console.log("Delete Employee:", employee);
    // console.log(onDelete(employee.id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">{employee.name}</Typography>
      <Typography variant="body1">Role: {employee.role}</Typography>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};
