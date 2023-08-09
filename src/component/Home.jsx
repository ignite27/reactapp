import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div id='card1' class="row d-flex justify-content-center">

        <div class="card col-4 mx-2" style={{width:" 18rem"}}>
    <img src="Portim.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Component-1</h5>
      <p class="card-text"></p>
      <Link to="/Like" class="btn btn-primary">View</Link>
    </div>
  </div>
        <div id='card2' class="card col-4 mx-2" style={{width:" 18rem"}}>
    <img src="Portim.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Component-2</h5>
      <p class="card-text"></p>
      <Link to="/card" class="btn btn-primary">View</Link>
    </div>
  </div>
        <div id='card3 ' class="card col-4 mx-2" style={{width:" 18rem"}}>
    <img src="Portim.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Component-3</h5>
      <p class="card-text"></p>
      <Link to="/condrend" class="btn btn-primary">View</Link>
    </div>
  </div>
  </div>
        <div className="row d-flex justify-content-center">

        <div id='card4' class="card col-4 mx-2" style={{width:" 18rem"}}>
    <img src="Portim.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Component-4</h5>
      <p class="card-text"></p>
      <Link to="/counter" class="btn btn-primary">View</Link>
    </div>
  </div>
        <div id='card5' class="card col-4 mx-2" style={{width:" 18rem"}}>
    <img src="Portim.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Component-5</h5>
      <p class="card-text"></p>
      <Link to="/eval" class="btn btn-primary">View</Link>
    </div>
  </div>
        <div id='card6' class="card col-4 mx-2" style={{width:" 18rem"}}>
    <img src="Portim.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Component-6</h5>
      <p class="card-text"></p>
      <Link to="/demotodo" class="btn btn-primary">View</Link>
    </div>
  </div>
  </div>
</div>
  )
}
