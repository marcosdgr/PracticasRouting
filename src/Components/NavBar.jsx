import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "../Css/NavBar.css"

const NavBar = () => {
  return (
    <div>
        
          <Nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/ellos">Ellos</Link>
            <Link to="/nosotros">Nosotros</Link>
          </Nav>
        
    </div>
  )
}

export default NavBar