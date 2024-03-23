import React, { useState } from 'react';
import styles from "./Register.module.css"
import { NavLink } from 'react-router-dom';
import { createUser } from '../../../apis/User';
import AlertBox from '../Alert/Alert';

const Register = () => {

  const[resgisterState , setRegisterState] = useState(false)
    const [data , setData] = useState({
        name : "",
        email : "",
        password : "",
        mobile : ""
    })

    const handleData = (e) => {
      e.preventDefault()
      setData({...data , [e.target.name] : e.target.value});
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      if(!data.name || !data.email || !data.password || !data.mobile){
        return alert("Field Missing!!")
      }
        await createUser(data).then(()=>setRegisterState(true))
    }

  return (
    <div className={styles.container}>
        <div className={styles.inputsection}>
            <h1 className={styles.heading}>Create an account</h1>
            <p className={styles.tagline}>Your personal job finder is here</p>
            <input className={styles.input} type='text' name='name' required placeholder='Name' value={data.name} onChange={handleData} />
            <input className={styles.input}   type='email' name='email' required placeholder='Email' value={data.email} onChange={handleData} />
            <input className={styles.input}  type='password' required name='password' placeholder='Password' value={data.password} onChange={handleData} />
            <input className={styles.input} type='tel' required pattern="[0-9]{10}"  name='mobile' placeholder='Mobile' value={data.mobile} onChange={handleData} />
           <label className={styles.input}  for='mobile'><input id='mobile' type='checkbox' required /><p style={{fontSize:'0.8rem'}}>By creating an account, I agree to our terms of use and privacy policy</p></label> 
           <button className={styles.button} onClick={handleSubmit}>Create Account</button>
           <p>Already have an account? <NavLink to="/login"><span style={{color:'black' , textDecoration:'underline'}}>Sign In</span></NavLink></p>
           {/* {resgisterState ? <AlertBox/> : null} */}
        </div>
    </div>
  )
}

export default Register