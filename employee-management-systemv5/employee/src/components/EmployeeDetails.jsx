// EmployeeDetails.jsx
import React from "react";

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>First Name: {employee.firstName}</p>
      <p>Last Name: {employee.lastName}</p>
      <p>Age: {employee.age}</p>
      <p>Date of Joining: {employee.dateOfJoining}</p>
      <p>Title: {employee.title}</p>
      <p>Department: {employee.department}</p>
      <p>Employee Type: {employee.employeeType}</p>
      <p>Current Status: {employee.currentStatus ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default EmployeeDetails;
