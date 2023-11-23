import React from "react";

import Fade from "react-reveal/Fade";

import "./App.css";

import { BarChart, EmployeeTable } from "./components";
import { Summary } from "./components/Summary";
import { GlobalSearch } from "./components/GlobalSearch";
import { Footer } from "./components/Footer";
import { Image } from "./components/Image";

function App() {
  return (
    <div className="App">
      <Summary />
      <Fade left>
        <BarChart />
      </Fade>

      <GlobalSearch />

      <EmployeeTable />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
