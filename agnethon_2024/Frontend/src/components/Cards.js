import React from 'react';

function Cards(props) {
  console.log(props.event); // Add this line to check props
  
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src={'http://localhost:4000/' + props.event.image} alt="Avatar" style={{ width: '200px', height: '200px', borderRadius: '50%'}} />
        </div>
        <div className="flip-card-back" style={{backgroundColor:'black'}}>
          <h1>{props.event.name}</h1>
          <h1>{props.event.head}</h1>
          <p>{props.event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
