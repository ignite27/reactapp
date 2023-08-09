import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">CRC_Training</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Components
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='#card1'>Component-1</a></li>
              <li><a className="dropdown-item" href="#card2">Component-2</a></li>
              <li><a className="dropdown-item" href="#card3">Component-3</a></li>
              <li><a className="dropdown-item" href="#card4">Component-4</a></li>
              <li><a className="dropdown-item" href="#card5">Component-5</a></li>
              <li><a className="dropdown-item" href="#card6">Component-6</a></li>
            
            </ul>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
