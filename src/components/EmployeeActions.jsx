import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

import { EmployeeDetails } from "./EmployeeDetails";
import { EmployeeEditForm } from "./EmployeeEditForm";
import { EmployeeDelete } from "./EmployeeDelete";
import { useEmployeeData } from "../hooks";

export const EmployeeActions = ({ employee, onRemove, onUpdateEmployee }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const { employees, setEmployees } = useEmployeeData();

  const handleDelete = () => {
    onRemove(employee.id);
  };

  return (
    <Box sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
      <Button
        variant="outlined"
        color="info"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        View
      </Button>
      <Button
        variant="contained"
        onClick={() => setShowEditForm((prev) => !prev)}
      >
        Edit
      </Button>

      <Button variant="contained" color="error" onClick={() => handleDelete()}>
        Delete
      </Button>
      {/* 
      {showDelete && (
        <Modal
          open={showDelete}
          onClose={() => setShowDelete(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EmployeeDelete employee={employee} />
        </Modal>
      )} */}

      {showDetails && (
        <Modal
          open={showDetails}
          onClose={() => setShowDetails(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EmployeeDetails employee={employee} />
        </Modal>
      )}

      {showEditForm && (
        <Modal
          open={showEditForm}
          onClose={() => setShowEditForm(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EmployeeEditForm employee={employee} onSave={onUpdateEmployee} />
        </Modal>
      )}
    </Box>
  );
};
