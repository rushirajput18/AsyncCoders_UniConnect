import React from 'react';
import './css/Comittees.css';
import Cards from './Cards';
import techno from './Images/techno.jpg'
import rang from './Images/Rangwardhan.png'
import prati from './Images/pratibimb.jpg'
import enthu from './Images/enthu.jpg'
const arr = ["The cultural extravaganza of VJTI,",
"रंगवर्धन: मराठी सांस्कृतिक रंगमंच, व्हीजेटीआय, मुंबई !🚩मराठी राजभाषेस अबाधित ठेवणे हेच आपले ध्येय !!",
"Technovanza, One of Asia's Largest Techno-Manegerial Festival",
"A national-level sports festival of VJTI, Mumbai"
] 
function Comittees() {
  return (
    <div className="committee-container">
     <Cards img = {techno} name='Technovanza' info={arr[2]}/>
     <Cards img = {rang} name='Rangwardhan' info={arr[1]}/>
     <Cards img = {prati} name='Pratibimb' info={arr[0]}/>
     <Cards img = {enthu} name='Enthusia' info={arr[3]}/>
     </div>
  );
}

export default Comittees;