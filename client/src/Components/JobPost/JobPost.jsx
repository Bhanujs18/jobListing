import React, { useState } from "react";
import styles from "./JobPost.module.css";

const JobPost = () => {
  const [data, setData] = useState({
    companyName: "",
    title: "",
    description: "",
    logoUrl: "",
    salary: "",
    location: "",
    locationType: "",
    skills: "",
    jobType: "",
    information: "",
    about: "",
  });

  const handleData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !companyName ||
      !title ||
      !description ||
      !logoUrl ||
      !salary ||
      !location ||
      !locationType ||
      !skills ||
      !jobType ||
      !information ||
      !about
    ) {
      return alert("Fill All Fields!!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputsection}>
        <h1 className={styles.heading}>Add job description</h1>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="companyName">
            Company Name
          </label>
          <input
            name="companyName"
            className={styles.input}
            type="text"
            onChange={handleData}
            value={data.companyName}
            placeholder="Enter your compnay name here"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="logoUrl">
            Add logo URL
          </label>
          <input
            className={styles.input}
            type="text"
            name="logoUrl"
            onChange={handleData}
            value={data.logoUrl}
            placeholder="Enter logo url"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="title">
            Job Position
          </label>
          <input
            className={styles.input}
            type="text"
            name="title"
            onChange={handleData}
            value={data.title}
            placeholder="Enter job position"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Monthly Salary</label>
          <input
            className={styles.input}
            type="text"
            name="salary"
            onChange={handleData}
            value={data.salary}
            placeholder="Enter amount in rupees"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Job Type</label>
          <select>
            <option className={styles.options}>Remote</option>
            <option className={styles.options}>Office</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Remote/Office</label>
          <select>
            <option className={styles.options}>Remote</option>
            <option className={styles.options}>Office</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Location</label>
          <input
            className={styles.input}
            type="text"
            onChange={handleData}
            value={data.location}
            name="location"
            placeholder="Enter Location"
          />{" "}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Job Description</label>
          <input
            className={styles.input}
            type="text"
            name="description"
            onChange={handleData}
            value={data.description}
            placeholder="Type the job description"
          />{" "}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>About Company</label>
          <input
            className={styles.input}
            type="text"
            onChange={handleData}
            value={data.about}
            name="about"
            placeholder="Enter about company"
          />{" "}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Skills Required</label>
          <input
            className={styles.input}
            type="text"
            name="skills"
            placeholder="Enter the must have skills"
          />{" "}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Information</label>
          <input
            className={styles.input}
            type="text"
            onChange={handleData}
            value={data.information}
            name="information"
            placeholder="Enter the additional details"
          />{" "}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Cancel</button>
          <button
            className={styles.button}
            style={{ background: "#ed5353", border: "none", color: "white" }}
          >
            + Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
