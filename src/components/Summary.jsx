import { Box } from "@mui/system";
import { useEmployeeData } from "../hooks";

const style = {
  width: "100%",
  margin: "auto",
  hight: "50%",
  gap: "10px",
  left: "0%",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  bgcolor: "black",
  color: "white",
};

export const Summary = () => {
  const { employees } = useEmployeeData();


  return (
    <Box sx={style}>
      <h3>the total number of employees and the average age.</h3>
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
