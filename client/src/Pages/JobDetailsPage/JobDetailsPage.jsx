import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import JobDetailsById from '../../Components/JobDetailsById/JobDetailsById';

const JobDetailsPage = () => {
  return (
    <div style={{background : "#ffefef" , height:"100%" }}>
      <NavBar/>
      <JobDetailsById />
    </div>
  )
}

export default JobDetailsPage