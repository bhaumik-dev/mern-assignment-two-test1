// EmployeeUpdate.jsx
import React, { useState } from "react";

const EmployeeUpdate = ({ employee, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: employee.title,
    department: employee.department,
    currentStatus: employee.currentStatus,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="currentStatus">Current Status:</label>
          <input
            type="checkbox"
            id="currentStatus"
            name="currentStatus"
            checked={formData.currentStatus}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EmployeeUpdate;
