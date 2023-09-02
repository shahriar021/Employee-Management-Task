import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

import { EmployeeDetails } from "./EmployeeDetails";
import { EmployeeEditForm } from "./EmployeeEditForm";
import { EmployeeDelete } from "./EmployeeDelete";

export const EmployeeActions = ({
  employee,

  onUpdateEmployee,

  employees,
  setEmployees,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

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

      <Button
        variant="contained"
        color="error"
        onClick={() => setShowDelete(true)}
      >
        Delete
      </Button>

      {showDelete && (
        <Modal
          open={showDelete}
          onClose={() => setShowDelete(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EmployeeDelete
            employee={employee}
            onDelete={() => {
              const updatedEmployees = employees.filter(
                (emp) => emp.id !== employee.id
              );

              setEmployees(updatedEmployees);

              setShowDelete(false);
            }}
          />
        </Modal>
      )}

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
