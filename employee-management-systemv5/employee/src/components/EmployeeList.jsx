// EmployeeList.js

import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import EmployeeTable from "./EmployeeTable";

const GET_EMPLOYEES = gql`
  query Employees($employeeType: String) {
    employees(employeeType: $employeeType) {
      id
      firstName
      lastName
      age
      title
      department
      employeeType
      currentStatus
    }
  }
`;

const EmployeeList = () => {
  const [filter, setFilter] = useState("");

  const { loading, error, data } = useQuery(GET_EMPLOYEES, {
    variables: { employeeType: filter },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Employee List</h2>
      <div>
        <label>Filter by Employee Type:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </div>
      <EmployeeTable employees={data.employees} />
    </div>
  );
};

export default EmployeeList;
