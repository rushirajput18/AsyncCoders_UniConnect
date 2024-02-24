import React from "react";
import "./css/Comittees.css";
import enthu from './Images/enthu.jpg'

import Cards from "./CardsEvents";

function Events() {
  return (
    <div>
      <div className="committee-container" style={{marginBottom: '20px', marginLeft:'10px', marginRight:'20px'}}>
        <Cards img={enthu} title="Enthusia"/>
        <Cards img={enthu} title="Enthusia"/>
        <Cards img={enthu} title="Enthusia"/>
        <Cards img={enthu} title="Enthusia"/>
      </div>
      {/* New row of Cards  */}
      <div className="committee-container" style={{marginLeft:'10px', marginRight:'20px'}}>
        <Cards img={enthu} title="Enthusia"/>
        <Cards img={enthu} title="Enthusia"/>
        <Cards img={enthu} title="Enthusia"/>
        <Cards img={enthu} title="Enthusia"/>
      </div>
    </div>
  );
}


export default Events;
