import React from 'react'
import {BrowserRouter , Route, Routes } from "react-router-dom";
import HomePage from './Pages/Homepage/HomePage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/register' element={<RegisterPage /> } />
        <Route path='/login' element={<LoginPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App