// EmployeeDelete.jsx
import React from "react";

const EmployeeDelete = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EmployeeDelete;
