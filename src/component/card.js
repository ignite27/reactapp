import React from 'react'
// import Rater from './rater';
import "bootstrap/dist/css/bootstrap.min.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rater from './rater';
const masterlist=[
  {productName:"Keyboard",image:"keyboard.jpg",price:"2500",description:"A great mechanical keyboard",rating:"3"},
  {productName:"monitor",image:"monitor.jpg",price:"24500",description:"full hd display 4k",rating:"4"},
  {productName:"Laptop",image:"gaming_lap.jpg",price:"1,20,000",description:"full hd display 4k",rating:"4"},
  
  
]

export default function Card() {

  return masterlist.map((obj)=>{
    return(
    <>
  <div id="Card1" className='d-flex justify-content-center'>
  <div className="card h-100" style={{width: "18rem",margin:"4px"}}>
  <img className="card-img-top" src={obj.image} alt="" height={"250px"}/>
  <div className="card-body">
    <h5 className="card-title">{obj.productName}</h5>
    <h5 className="card-title "><i className="fa-solid fa-indian-rupee-sign"></i>{obj.price}</h5>
    <p className="card-text">{obj.description}</p>
    <p><Rater rating={obj.rating}/></p>
    
  </div>
</div>
  </div>
  </>)}
  )}
       
  
  
  
    
