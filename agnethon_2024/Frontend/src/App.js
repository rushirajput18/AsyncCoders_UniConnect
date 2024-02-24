import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Comittees from './components/Comittees';
import RegisterPage from './components/RegisterPage';
import Events from './components/Events.js';
import Login from './components/Login';
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='w-100px'>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/events' element={<Events />} />

            <Route exact path="/comittees" element={<Comittees />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;