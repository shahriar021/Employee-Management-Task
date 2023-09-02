import { BarChart as MuiBarChart } from "@mui/x-charts/BarChart";

import { useEmployeeData } from "../hooks";

export const BarChart = () => {
  const { employees } = useEmployeeData();

  const positions = employees.map((employee) => employee.position);
  const positionSet = new Set(positions);
  const positionCounts = Array.from(positionSet).map(
    (position) => positions.filter((p) => p === position).length
  );

  return (
    <MuiBarChart
      xAxis={[
        {
          id: "barCategories",
          data: Array.from(positionSet),
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: positionCounts,
        },
      ]}
      height={300}
    />
  );
};
