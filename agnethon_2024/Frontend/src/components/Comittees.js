import React from 'react';
import './css/Comittees.css';
import Cards from './Cards';
import techno from './Images/techno.jpg'
import rang from './Images/Rangwardhan.png'
import prati from './Images/pratibimb.jpg'
import enthu from './Images/enthu.jpg'
import digital from './Images/digital.png'
import ecell from './Images/ecell.jpg'
import dla from './Images/dla.png'
import cesa from './Images/cesa.png'
const arr = ["The cultural extravaganza of VJTI,",
"रंगवर्धन: मराठी सांस्कृतिक रंगमंच, व्हीजेटीआय, मुंबई !🚩मराठी राजभाषेस अबाधित ठेवणे हेच आपले ध्येय !!",
"Technovanza, One of Asia's Largest Techno-Manegerial Festival",
"A national-level sports festival of VJTI, Mumbai",
"DLA stands for Debate and Literary Activities Club of VJTI.It is an extremely chill, close-knit community of like-minded individuals who share a common interest in debates, books, performing arts and similar activities. ",
"Civil Engineering Student's Association - One place for you to meet engineers and explore the depths of Civil Engineering through activities and lessons",
"Digital VJTI is the golden string which woves all our jewels, our committees together.This committee is the backend of VJTI Social Group and hosts numerous activities with its collaboration.",
"E-Cell VJTI strives to be at the forefront by promoting entrepreneurship as a career, creating holistic and synergistic environment required to inculcate strong entrepreneurial spirit in students"
] 
function Comittees() {
  return (
    <div>
    <div className="committee-container" style={{marginLeft:'20px', marginRight:'20px', marginBottom:'20px'}}>
        <Cards img = {rang} name='Rangwardhan' info={arr[1]}/>
        <Cards img = {techno} name='Technovanza' info={arr[2]}/>
        <Cards img = {prati} name='Pratibimb' info={arr[0]}/>
        <Cards img = {enthu} name='Enthusia' info={arr[3]}/>
      </div>
    <div className="committee-container" style={{marginLeft:'20px', marginRight:'20px'}}>
        <Cards img = {digital} name='Digital Vjti' info={arr[6]}/>
        <Cards img = {dla} name='DLA' info={arr[4]}/>
        <Cards img = {cesa} name='CESA' info={arr[5]}/>
        <Cards img = {ecell} name='ECell' info={arr[7]}/>
    
      </div>
 
     
      </div>
  );
}

export default Comittees;