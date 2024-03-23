import React from 'react'
import registerImage from "../../assets/registerImage.png"
import Login from '../../Components/Login/Login'

const LoginPage = () => {
  return (
    <div style={{display:'flex' , width:'100%'}}>
        <Login />
        <img src = {registerImage} 
        style={{width : "45%" , maxHeight:'100vh' , objectFit:'cover'}}
        />
    </div>
  )
}

export default LoginPage