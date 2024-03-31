import React from 'react'
import registerImage from "../../assets/registerImage.png"
import Login from '../../Components/Login/Login'

const LoginPage = () => {
  return (
    <div style={{display:'flex' , width:'100%'}}>
        <Login />
        <div style={{width:"45%"}} className='textImage'>
        <img src = {registerImage} 
        style={{width : "100%" , maxHeight:'100vh' , objectFit:'cover'}}
        />
        <h1 className='imageText'>Your Personal Job Finder</h1>
        </div>
    </div>
  )
}

export default LoginPage