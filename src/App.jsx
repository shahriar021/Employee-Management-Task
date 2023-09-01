import React from 'react';
import './App.css';

import { BarChart, EmployeeTable } from './components';

function App() {
  return (
    <div className="App">
      <h1>Employee Managemnet Task</h1>
      <EmployeeTable />
      <BarChart />
    </div>
  );
}

export default App;
