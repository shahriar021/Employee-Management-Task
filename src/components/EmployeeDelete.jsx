import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export const EmployeeDelete = ({ onDelete }) => {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={onDelete}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Deleted
    </Button>
  );
};
