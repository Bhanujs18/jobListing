import React, { useEffect, useState } from "react";
import styles from "./JobDetailsById.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { jobDetailsById } from "../../../apis/Job";

const JobDetailsById = () => {
  const id = useParams().id;
  const [jobDetails, setDetailsJob] = useState();
  const [userId] = useState(localStorage.getItem("id"))
  const [ edit , setEdit] = useState(false);
  const navigate = useNavigate();
 

  useEffect(()=>{
    if(jobDetails?.refUserId  === userId) {
      setEdit(true);
    }
    else{
      setEdit(false);
    }
  },[jobDetails?.refUserId])


  const fetJobDetails = async () => {
    const res = await jobDetailsById(id);
    setDetailsJob(res.data.isJobExist);
    console.log(jobDetails?.companyName);
  };

  useEffect(() => {
    fetJobDetails();
  }, []);
  
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleDiv}>{jobDetails?.description}</div>
        <div className={styles.DetailsBox}>
          <div className={styles.header}>
            <p>{jobDetails?.locationType}</p>
            <img className={styles.icon} src={jobDetails?.logoUrl} />
            <p>{jobDetails?.companyName}</p>
          </div>
          <div className={styles.header} style={{width:'100%' , justifyContent:'space-between'}}>
            <p className={styles.title} style={{color:'black'}}>{jobDetails?.title}</p>
            {edit ?  <button className="button"   onClick={()=>{
                navigate("/jobPost" , {
                  state : {
                    jobDetails : jobDetails,
                    edit : true ,
                  },
                });
              }}>Edit Job</button> : null} 
          </div>
          <p className={styles.location}>{jobDetails?.location}</p>
          <div className={styles.assets}>
                  <div><div><img width="24" height="24" src="https://img.icons8.com/material/24/808080/money.png" alt="money"/><p>Stipend</p></div><p>Rs {jobDetails?.salary}/Month</p></div>
                  <div><div><img width="24" height="24" src="https://img.icons8.com/forma-bold-filled/24/808080/bag-front-view.png" alt="bag-front-view"/><p>Stipend</p></div><p>{jobDetails?.duration}</p></div>
          </div>
          <div className={styles.about}>
            <h5>About Company</h5>
            <p>{jobDetails?.about}</p>
          </div>
          <div className={styles.about}>
            <h5>About Job/Internship</h5>
            <p>{jobDetails?.information}</p>
          </div>
          <div className={styles.about}>
            <h5>Skill(s) required</h5>
            <div className={styles.skills}>
              {jobDetails?.skills.map((cur) => {
                return <div className={styles.skill}>{cur}</div>;
              })}
            </div>
          </div>
          <div className={styles.about}>
            <h5>Additional information</h5>
            <p>{jobDetails?.information}</p>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default JobDetailsById;
