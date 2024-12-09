// src/components/ClassroomForm.js
import React, { useState } from "react";

const ClassroomForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    classroomNumber: "",
    rows: "",
    columns: "",
    threeSeater: "",
    fiveSeater: "",
    subjectCode: "",
    startingUSN: "",
    examDate: "",
    examTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent (App) on form submission
  };

  return (
    <div className="p-4 border rounded bg-light">
      <h4>Classroom Details</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="classroomNumber" className="form-label">Classroom Number</label>
          <input
            type="text"
            name="classroomNumber"
            id="classroomNumber"
            className="form-control"
            value={formData.classroomNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rows" className="form-label">Number of Rows</label>
          <input
            type="number"
            name="rows"
            id="rows"
            className="form-control"
            value={formData.rows}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="columns" className="form-label">Number of Columns</label>
          <input
            type="number"
            name="columns"
            id="columns"
            className="form-control"
            value={formData.columns}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="threeSeater" className="form-label">Number of 3-Seater Benches</label>
          <input
            type="number"
            name="threeSeater"
            id="threeSeater"
            className="form-control"
            value={formData.threeSeater}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fiveSeater" className="form-label">Number of 5-Seater Benches</label>
          <input
            type="number"
            name="fiveSeater"
            id="fiveSeater"
            className="form-control"
            value={formData.fiveSeater}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subjectCode" className="form-label">Subject Code</label>
          <input
            type="text"
            name="subjectCode"
            id="subjectCode"
            className="form-control"
            value={formData.subjectCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="startingUSN" className="form-label">Starting USN</label>
          <input
            type="text"
            name="startingUSN"
            id="startingUSN"
            className="form-control"
            value={formData.startingUSN}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="examDate" className="form-label">Exam Date</label>
          <input
            type="date"
            name="examDate"
            id="examDate"
            className="form-control"
            value={formData.examDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="examTime" className="form-label">Exam Time</label>
          <input
            type="time"
            name="examTime"
            id="examTime"
            className="form-control"
            value={formData.examTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ClassroomForm;
