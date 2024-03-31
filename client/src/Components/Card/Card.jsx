import React from "react";
import styles from "./Card.module.css";

const Card = ({ cur }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.leftSectionDiv}>
          <div className={styles.leftSection}>
          <img className={styles.companyIcon} src={cur.logoUrl} />
          <div className={styles.titleAndSalary}>
            <p> {cur.title}</p>
            <div className={styles.location} style={{color:'grey' , justifyContent:'space-between'}}>
              <div style={{display:'flex'}}><img width="24" height="24" src="https://img.icons8.com/material/24/808080/user-group-man-woman--v1.png" alt="user-group-man-woman--v1"/>&nbsp;<p>11-50</p></div>
              <p>${cur.salary}</p>
            </div>
            <div className={styles.location}>
          <p>Office</p>
          <p>Fulltime</p>
          </div>
          </div>
         <div style={{color:'grey'}}><img width="48" height="48"  className={styles.flag} src="https://img.icons8.com/color/48/india.png" alt="india"/>&nbsp;{cur.location}</div> 
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
              <button className="wbutton">Edit Job</button>
              <button className="button">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
