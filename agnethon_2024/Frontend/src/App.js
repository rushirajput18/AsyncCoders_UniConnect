import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Comittees from './components/Comittees';
import RegisterPage from './components/RegisterPage';
import Events from './components/Events.js';
import Login from './components/Login';
import './App.css'
import CreatePost from './components/CreatePost.js';
import PostPage from './components/PostPage.js';
import EditPost from './components/EditPost.js';
import MyCalender from './components/MyCalender.js';
import ApprovalForm from './components/ApprovalForm.js';
import Applications from './components/Applications.js';
import Home from './components/Home.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='w-100px'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/approval' element={<ApprovalForm />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/events' element={<Events />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='/edit/:id' element={<EditPost />} />
            <Route path='/calender' element={<MyCalender />} />
            <Route path='/applications' element={<Applications />} />

            <Route exact path="/comittees" element={<Comittees />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;