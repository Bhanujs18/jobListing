import React, { useState } from "react";
import styles from "./JobPost.module.css";
import { createJob, updateJobById } from "../../../apis/Job";
import { NavLink, useLocation } from "react-router-dom";

const JobPost = () => {
  const {state} = useLocation();
  const [jobDetails , setJobDetails] = useState(state?.jobDetails);
  const [data, setData] = useState({
    companyName: "" || jobDetails?.companyName,
    title: "" || jobDetails?.title,
    description: "" || jobDetails?.description,
    logoUrl: "" || jobDetails?.logoUrl,
    duration : "" || jobDetails?.duration,
    salary: "" || jobDetails?.salary,
    location: "" || jobDetails?.location,
    locationType: "" || jobDetails?.locationType,
    skills: jobDetails?.skills || [],
    jobType: "" || jobDetails?.jobType,
    information: "" || jobDetails?.information,
    about: "" || jobDetails?.about,
  });


  const handleData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    if(state?.edit){
      await updateJobById(jobDetails._id , data)
      return;
    }

    e.preventDefault();
    if (!data.companyName ||
      !data.title ||
      !data.description ||
      !data.logoUrl ||
      !data.salary ||
      !data.duration ||
      !data.location ||
      !data.locationType ||
      !data.skills ||
      !data.jobType ||
      !data.information ||
      !data.about
    ) {
      return alert("Fill All Fields!!");
    }

    await createJob(data);
  };

const addSkills = (e) => {
e.preventDefault();
 const filteredskill =  data.skills.filter((skill) => skill===e.target.value);
 if(!filteredskill.length){
  setData({...data , skills:[...data.skills , e.target.value]})
 }

}

const removeSkill = (cur) => {;
  console.log(cur)
   const filteredskill =  data.skills.filter((skill) => skill!==cur);
   console.log(filteredskill)
    setData({...data , skills: filteredskill})  
  }


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
          <label className={styles.label} htmlFor="logoUrl">
            Duration
          </label>
          <input
            className={styles.input}
            type="text"
            name="duration"
            onChange={handleData}
            value={data.duration}
            placeholder="Enter duration"
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
          <label className={styles.label}  htmlFor="jobType">Job Type</label>
          <select  value={data.jobType} name="jobType"  onChange={handleData}>
            <option value="Full-time" className={styles.options} selected>Full-time</option>
            <option value="Part-time" className={styles.options}>Part-time</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="locationType">Remote/Office</label>
          <select value={data.locationType}  name="locationType"   onChange={handleData} >
            <option  value="Remote" className={styles.options} selected>Remote</option>
            <option  value="Office" className={styles.options}>Office</option>
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
          <label className={styles.label} htmlFor="skills">Skills Required</label>
          <select   className={styles.input}
            type="text"
            onChange={addSkills}
            name="skills"
            placeholder="Enter the must have skills">
              <option selected hidden>Select your skills</option>
            <option value="React">React</option>
            <option value="Express">Express</option>
            <option value="Redux">Redux</option>
            <option value="Tailwind">Tailwind</option>
            <option value="Next">Next</option>
          </select>
        </div>
        <div className={styles.skills}>
                 {data.skills && data.skills.map((cur)=>{
              return (
                 <div className={styles.skill}>{cur}<img style={{cursor:"pointer"}} onClick={()=>removeSkill(cur)} width="16" height="16" src="https://img.icons8.com/emoji/48/cross-mark-emoji.png" alt="cross-mark-emoji"/></div>
              )
        }) }
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
         <NavLink to={"/"}><button className={styles.button}>Cancel</button></NavLink> 
          <button
            className={styles.button}
            onClick={handleSubmit}
            style={{ background: "#ed5353", border: "none", color: "white" }}
          >
            {state?.edit ? <>Edit Job</> :  <>+Add Job</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
