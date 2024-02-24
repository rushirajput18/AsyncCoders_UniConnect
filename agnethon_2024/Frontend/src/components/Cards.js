import React from 'react'

function Cards(props) {
  return (
    <>
       <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.img} alt="Avatar" style={{ width: '300px', height: '200px' }} />
          </div>
          <div className="flip-card-back bg-success">
            <h1>{props.name}</h1>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
