import React from 'react'
import Register from '../../Components/Register/Register'
import registerImage from "../../assets/registerImage.png"

const RegisterPage = () => {
  return (
    <div style={{display:'flex' , width:'100%'}}>
        <Register />
        <div style={{width:"45%"}} className='textImage'>
        <img src = {registerImage} 
        style={{width : "100%" , maxHeight:'100vh' , objectFit:'cover'}}
        />
        <h1 className='imageText'>Your Personal Job Finder</h1>
        </div>
    </div>
  )
}

export default RegisterPage