import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEmployeeData } from "../hooks";

export function GlobalSearch() {
  const { employees } = useEmployeeData();
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <Autocomplete
      value={selectedOption}
      onChange={handleOptionChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      id="global-search"
      options={employees}
      getOptionLabel={(employee) => employee.name}
      renderInput={(employee) => (
        <TextField {...employee} label="Search Employees" variant="outlined" />
      )}
    />
  );
}
