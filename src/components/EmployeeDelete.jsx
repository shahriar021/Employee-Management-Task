import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export const EmployeeDelete = (props) => {
  const handlwDelete = (id) => {
   
  };
  return (
    <Button
      variant="contained"
      color="error"
      onClick={(id) => handlwDelete(id)}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Del
    </Button>
  );
};
