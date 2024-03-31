import React, { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { NavLink } from "react-router-dom";
import { allJobs } from "../../../apis/Job";
import Card from "../Card/Card";

const SearchBox = () => {

    const [jobs , setJobs] = useState()

    const fetchAllJobs = async () => {
     const data = await allJobs();
     setJobs(data.data);
     console.log(jobs)
    }

    useEffect (()=> {
        fetchAllJobs()
    },[])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.searchBox}>
          <label>
            <img
              className={styles.searchIcon}
              src="https://img.icons8.com/ios-filled/50/search--v1.png"
              alt="search--v1"
            />
          </label>
          <input className={styles.input} placeholder="Type any job title" />
        </div>
        <div className={styles.skills}>
          <div>
        
              <select placeholder="Skills" className={styles.select}>
                <option value="" style={{color:'grey'}} disabled selected hidden>
                    Skills
                </option>
                <option>Html</option>
                <option>Css</option>
                <option>React</option>
                <option>Js</option>
                <option>Next</option>
              </select>
          </div>
          <NavLink to={"/jobpost"} style={{textDecoration:'none'}}><button className="button">+ Add Job</button></NavLink>
        </div>
      </div>
             {jobs && jobs.map((cur)=> {
                return(
                       <Card cur={cur} />
                )
             })}
        </div>
  );
};

export default SearchBox;
