import { useState } from "react";
import { employeeSeedData } from "../data";

export function useEmployeeData() {
  const [employees, setEmployees] = useState(employeeSeedData);

  return { employees, setEmployees };
}
