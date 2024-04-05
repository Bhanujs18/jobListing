import React, { useEffect } from "react";
import styles from "./Card.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = ({cur}) => {
  const [isLogin] = useState(localStorage.getItem("token"));
  const [userId] = useState(localStorage.getItem("id"))
  const [ edit , setEdit] = useState(false);
  const jobDetails = cur;
  const navigate = useNavigate();
  useEffect(()=>{
    if(cur.refUserId  === userId) {
      setEdit(true);
    }
    else{
      setEdit(false);
    }
  },[])
   
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.leftSectionDiv}>
          <div className={styles.leftSection}>
            <img className={styles.companyIcon} src={cur.logoUrl} />
            <div className={styles.titleAndSalary}>
              <p> {cur.title}</p>
              <div
                className={styles.location}
                style={{ color: "grey", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex" }} className={styles}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material/24/808080/user-group-man-woman--v1.png"
                    alt="user-group-man-woman--v1"
                  />
                  &nbsp;<p>11-50</p>
                </div>
                <p>${cur.salary}</p>
              </div>
            </div>
            <div style={{ color: "grey" }}>
              <img
                width="48"
                height="48"
                className={styles.flag}
                src="https://img.icons8.com/color/48/india.png"
                alt="india"
              />
              &nbsp;{cur.location}
            </div>
          </div>
          <div
            className={styles.location}
            style={{ width: "100%", paddingLeft: "5rem" }}
          >
            <p>{cur.locationType}</p>
            <p>{cur.jobType}</p>
          </div>
        </div>

        <div>
          <div className={styles.rightSection}>
            <div className={styles.skills}>
              {cur.skills.map((cur) => {
                return <div className={styles.skill}>{cur}</div>;
              })}
            </div>
            <div className={styles.buttons}>
              {edit && isLogin ?    <button   className="wbutton"    onClick={()=>{
                navigate("/jobPost" , {
                  state : {
                    jobDetails : jobDetails,
                    edit : true ,
                  },
                });
              }}>
                                     Edit Job</button> : null}
               <NavLink style={{textDecoration:'none'}} to={`/jobDetails/${cur._id}`}><button className="button" >View Details</button></NavLink>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
