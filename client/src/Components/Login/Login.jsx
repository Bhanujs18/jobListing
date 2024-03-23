import React, { useState } from 'react';
import styles from "./Login.module.css"
import {NavLink} from 'react-router-dom';
import { loginUser } from '../../../apis/User';

const Login = () => {

    const [data , setData] = useState({
        email : "",
        password : "",
    })

    const handleData = (e) => {
      setData({...data , [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
   e.preventDefault();
    if(!data.email || !data.password){
      return alert("Empty Fields!!!")
    }
    const res = await loginUser(data);
    const token = res.data.token
    console.log(token)
    localStorage.setItem("token" , token);
    }

  return (
    <div className={styles.container}>
        <div className={styles.inputsection}>
            <h1 className={styles.heading}>Already have an account</h1>
            <p className={styles.tagline}>Your personal job finder is here</p>
            <input className={styles.input}   type='email' name='email' required placeholder='Email' value={data.email} onChange={handleData} />
            <input className={styles.input}  type='password' required name='password' placeholder='Password' value={data.password} onChange={handleData} />
           <button className={styles.button} onClick={handleSubmit}>Sign In</button>
           <p>Don't have an account? <NavLink to="/register"><span style={{color:'black' , textDecoration:'underline'}}>Sign Up</span></NavLink></p>
        </div>
    </div>
  )
}

export default Login