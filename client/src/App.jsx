import React from 'react'
import {BrowserRouter , Route, Routes } from "react-router-dom";
import HomePage from './Pages/Homepage/HomePage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobPostPage from './Pages/JobPostPage/JobPostPage';
import "./App.css"
import JobDetailsPage from './Pages/JobDetailsPage/JobDetailsPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/register' element={<RegisterPage /> } />
        <Route path='/login' element={<LoginPage /> } />
        <Route path='/jobpost' element={<JobPostPage /> } />
        <Route path='/jobDetails/:id' element={<JobDetailsPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App