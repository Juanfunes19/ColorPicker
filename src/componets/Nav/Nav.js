import React from 'react'
import logo from "./logo.png"
import "./Nav.css"

const Nav = () => {
  return (
        <nav className="navbar navbar-light bg-light px-5">
            <div className="container-fluid navrow">
                <div className='d-flex flex-row '>
                    <img src={logo} alt="Logo" className='logo' id='logo'/>
                    <ul className="navbar-nav d-flex flex-row justify-content-start px-md-5" id='nav-link'>
                        <li className="nav-item px-2" >
                            <a className="nav-link " id='hiper'  href="#">Paletas</a>
                        </li>
                        <li className="nav-item px-2" >
                            <a className="nav-link " id='hiper' href="#">Selector</a>
                        </li>
                        <li className="nav-item px-2" >
                            <a className="nav-link " id='hiper' href="#">Tendencias</a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-outline-success" id='btn' type="submit">Registrate</button> 
            </div>
        </nav>
  )
}

export default Nav