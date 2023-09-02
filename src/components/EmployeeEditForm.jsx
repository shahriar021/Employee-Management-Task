import React, { useState } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";

export const EmployeeEditForm = ({ employee, onSave }) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({
      ...editedEmployee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editedEmployee.id = employee.id;
    onSave(editedEmployee);
    console.log("Edited Employee:", editedEmployee);
    setShowForm(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Edit Employee Information
        </Typography>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={employee.name}
              name="name"
              value={editedEmployee.firstName}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label={employee.age}
              name="age"
              value={editedEmployee.age}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label={employee.position}
              name="position"
              value={editedEmployee.positon}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label={employee.department}
              name="department"
              value={editedEmployee.department}
              onChange={handleInputChange}
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Save Changes
            </Button>
          </form>
        ) : (
          <p>edited.</p>
        )}
      </Paper>
    </Box>
  );
};
