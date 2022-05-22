import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import AdminLogin from './Screens/AdminLogin';
import AdminRegister from './Screens/AdminRegister';
import AdminPannel from './Screens/AdminPannel';


function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/users/login' element = {<Login />}></Route>
        <Route path='/users/adminlogin' element = {<AdminLogin />}></Route>
        <Route path='/users/register' element = {<Register />}></Route>
        <Route path='/users/adminregister' element = {<AdminRegister />}></Route>
        <Route path='/users/adminpannel' element = {<AdminPannel />}></Route>
       
        
        
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
