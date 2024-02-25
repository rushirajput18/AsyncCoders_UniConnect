import React from 'react';

function Cards(props) {
  console.log(props.event); // Add this line to check props
  
  return (
    <div className="card" style={{width: '18rem'}}>
<img src={props.img} className="card-img mx-auto my-auto" style={{ width: '200px'}} alt="..." />
    <div className="card-body">
      <h3 className="card-text" >{props.name}</h3>
      <h5 className="card-text" style={{color:'blue'}}>Secretory: {props.head}</h5>
      <p className="card-text">{props.info}</p>
    </div>
  </div>
  );
}

export default Cards;
