import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Screen/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import About from './components/about/about';


function App() {
  return (
    // <Router>
    //    <Routes>
    //       <Route path='/' element={<Home/>}/>
    //       <Route path='/about' element={<About/>}/>
    //       <Route path="/login" element={<Login/>} />
    //       <Route path='/signup' element={<Signup/>}/>

    //     </Routes> 
    // </Router>
    <Menu/>
        
  );
}

export default App;
