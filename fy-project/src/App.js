import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './component/Screen/Home';
import Navbar from './component/Navbar/Navbar'
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Router>
        
   
  )
}

export default App;
