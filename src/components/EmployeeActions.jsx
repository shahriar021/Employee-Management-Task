import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

import { EmployeeDetails } from "./EmployeeDetails";
import { EmployeeEditForm } from "./EmployeeEditForm";

export const EmployeeActions = ({ employee, onRemove, onUpdateEmployee }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

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
