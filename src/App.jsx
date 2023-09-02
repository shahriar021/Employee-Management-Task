import React from 'react';
import './App.css';


import { BarChart, EmployeeTable } from './components';
import { Summary } from './components/Summary';
import { GlobalSearch } from './components/GlobalSearch';
import { Footer } from './components/Footer';
import { Image } from './components/Image';

function App() {
  return (
    <div className="App">
      <h1>Employee Managemnet Task</h1>
      <Summary />
      <Image />
      <GlobalSearch />

      <EmployeeTable />
      <BarChart />

      <Footer />
    </div>
  );
}

export default App;
