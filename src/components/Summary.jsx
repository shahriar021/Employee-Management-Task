import { Box } from "@mui/system";
import { useEmployeeData } from "../hooks";

export const Summary = () => {
  const { employees } = useEmployeeData();

  const style = {
    padding: "3.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "white",
    boxShadow: "26",
  };
  return (
    <Box sx={style}>
      <h3>Employee Management System</h3>
      <p>Number of Employees: {employees.length}</p>
      <p>
        Average Age:{" "}
        {Math.round(
          employees.reduce((acc, employee) => acc + employee.age, 0) /
            employees.length
        )}
      </p>
    </Box>
  );
};
