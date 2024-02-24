import React from 'react';
import './css/Comittees.css';
import Cards from './Cards';
import techno from './Images/techno.jpg'
import rang from './Images/Rangwardhan.png'
import prati from './Images/pratibimb.jpg'
import enthu from './Images/enthu.jpg'
function Comittees() {
  return (
    <div className="committee-container">
     <Cards img = {techno} name='Technovanza'/>
     <Cards img = {rang} name='Rangwardhan'/>
     <Cards img = {prati} name='Pratibimb'/>
     <Cards img = {enthu} name='Enthusia'/>
     </div>
  );
}

export default Comittees;
