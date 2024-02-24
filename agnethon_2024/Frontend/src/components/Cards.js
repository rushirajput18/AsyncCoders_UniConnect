import React from 'react'

function Cards(props) {
  return (
    <>
       <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.img} alt="Avatar" style={{ width: '200px', height: '200px', borderRadius: '50%'}} />
          </div>
          <div className="flip-card-back" style={{backgroundColor:'black'}}>
            <h1>{props.name}</h1>
           <p>{props.info}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards