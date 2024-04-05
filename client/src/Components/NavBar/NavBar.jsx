import React, { useEffect, useState } from 'react';
import styles from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import R1 from "../../assets/R1.png"
import R2 from "../../assets/R2.png"
import R3 from "../../assets/R3.png"
import { getUser } from '../../../apis/User';


const NavBar = () => {
  const [id] = useState(localStorage.getItem("id"));
  const [username , setUsername] = useState();
  const fetchUser = async (id) => {
   const res = await getUser(id);
   if(res)
   setUsername(res?.data?.name);
  }

  useEffect (()=>{
    fetchUser(id);
  },[])

const logout = () =>{
localStorage.removeItem("token");
localStorage.removeItem("id");
}

  return (
    <div className={styles.container}>
        <div className={styles.box}>
          <NavLink to={"/"} style={{textDecoration:'none'}}><h1 className={styles.heading}>Job Finder</h1></NavLink>  
            {!id ?  <div className={styles.buttons}>
                <NavLink to={"/login"}><button className={styles.button} style={{background:'transparent' , color:'white' , border: "1.5px white solid"}}>Login</button></NavLink>
                <NavLink to={"/register"}><button className={styles.button}>Register</button></NavLink>   
            </div> :
                <div className={styles.buttons}>
                <NavLink to={"/login"}><button className={styles.button} style={{background:'transparent' , color:'white' , border: "1.5px white solid"}} onClick={logout}>Logout</button></NavLink>
                <NavLink><button className={styles.button}>{username}</button></NavLink>   
            </div>
            }
         
        </div>
        <div className={styles.blocks}>
            <img src={R1} />
            <img src={R2} />
            <img src={R3} />
        </div>
    </div>
  )
}

export default NavBar