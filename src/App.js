import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Joinus from './pages/Joinus';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

import './App.css';

const App = () => {
  return (
    <div>

      {/* <Router> */}
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/joinus' element={<Joinus />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
