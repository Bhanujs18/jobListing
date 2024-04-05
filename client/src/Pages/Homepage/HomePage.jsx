import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SearchBox from '../../Components/SearchBox/SearchBox'

const HomePage = () => {
  return (
    <div>
      <NavBar  />
      <SearchBox />
    </div>
  )
}

export default HomePage