import React from 'react'

function CardsEvents(props) {
  return (
    <div>
        <div class="card" style={{width: "15rem"}}>

    <img class="card-img-top" src={props.img} alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn bg-black text-light bg-dark">Register</a>
    </div>
    </div>
    </div>
  )
}

export default CardsEvents
