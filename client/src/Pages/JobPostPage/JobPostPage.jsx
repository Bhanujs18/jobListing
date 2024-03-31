import React from 'react'
import html from "../../assets/html.png"
import JobPost from '../../Components/JobPost/JobPost'

const JobPostPage = () => {
  return (
    <div style={{display:'flex' , width:'100%'}}>
        <JobPost />
        <div style={{width:"45%"}} className='textImage'>
        <img src = {html} 
        style={{width : "100%" , maxHeight:'100vh' , objectFit:'cover'}}
        />
        <h1 className='imageText'>Recruiter add job details here</h1>
        </div>
    </div>
  )
}

export default JobPostPage