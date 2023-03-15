import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Screen/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import About from './components/About/About';


function App() {
  return (
    <>
    <Router>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>  
    </Router>
    </>  
  );
}

export default App;
