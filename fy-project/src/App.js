import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Screen/Home';
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Footer from './components/footer/footer.jsx';
import About from './components/about/about';
import Review from './components/review/review.jsx';
import Team from "./components/team/team.jsx"



function App() {
  return (
   <>
    <Router>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
         
        </Routes>  
    </Router>
     {/* <Review/> */}
     <Team/>
     <About/>
    <Footer /> 
    </>
  
  )
}

export default App;
