import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import EmployeeDirectory from "./components/EmployeeDirectory";
import Navbar from "./components/Navbar";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeList from "./components/EmployeeList";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeDelete from "./components/EmployeeDelete";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Use Routes instead of Route */}
        <Routes>
          <Route exact path="/" element={<EmployeeDirectory />} />
          <Route exact path="/employee/create" element={<EmployeeCreate />} />
          <Route exact path="/employee/table" element={<EmployeeTable />} />
          <Route exact path="/employee/list" element={<EmployeeList />} />
          <Route exact path="/employee/:id" element={<EmployeeDetails />} />
          <Route
            exact
            path="/employee/:id/update"
            element={<EmployeeUpdate />}
          />
          <Route
            exact
            path="/employee/:id/delete"
            element={<EmployeeDelete />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
