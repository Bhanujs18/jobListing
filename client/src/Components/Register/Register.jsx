import React, { useState } from 'react';
import styles from "./Register.module.css"
import { NavLink } from 'react-router-dom';
import { createUser } from '../../../apis/User';
import AlertBox from '../Alert/Alert';

const Register = () => {

  const[resgisterState , setRegisterState] = useState(false)
  const[error, setError] = useState("Registration Failed!!")
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
        setError("Field Missing!!!");
        setRegisterState(true);
          return
      }
        await createUser(data).then(()=>setRegisterState(true))
    }


    setInterval(()=>setRegisterState(false) , 4000);

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
           {resgisterState ?   <AlertBox  message={error} /> : null}
         
        </div>
    </div>
  )
}

export default Register