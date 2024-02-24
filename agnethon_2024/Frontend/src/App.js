
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Comittees from './components/Comittees';
// import Login from './components/Login';
function App() {
 
 
  return (
    <>
    <Router>
      <Navbar />
      <div className='w-100px'>
      <Routes>
      <Route exact path="/comittees" element= {<Comittees />}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;