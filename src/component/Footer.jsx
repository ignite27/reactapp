import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMailchimp} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div><div className="card bg-light ">
    <div className="card-header">
      <h4 style={{color:"success"}}>Contact</h4> 
    </div>
    <div className="card-body">
      
    
      <a href="https://www.linkedin.com/in/devansh-singh-75b59220b/" className="btn mt-2"><FontAwesomeIcon icon={faLinkedin} bounce size='2xl'/>Linkedin </a><br/>
      <a href="https://github.com/ignite27" className="btn mt-2 mt-2"><FontAwesomeIcon icon={faGithub} bounce size='2xl' /> Github </a><br/>
      <a  className="btn mt-2"><FontAwesomeIcon icon={faMailchimp} bounce size='2xl'/> Tdevs2712@gmail.com </a>
    
    </div>
  </div></div>
  )
}
