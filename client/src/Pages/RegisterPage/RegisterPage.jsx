import React from 'react'
import Register from '../../Components/Register/Register'
import registerImage from "../../assets/registerImage.png"

const RegisterPage = () => {
  return (
    <div style={{display:'flex' , width:'100%'}}>
        <Register />
        <img src = {registerImage} 
        style={{width : "45%" , maxHeight:'100vh' , objectFit:'cover'}}
        />
    </div>
  )
}

export default RegisterPage