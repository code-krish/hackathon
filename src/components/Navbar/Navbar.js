import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';

function Navbar(props) {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
          <Link to = {"/"} className="navbar-brand" href="#">
            PIZZA EXPRESS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
                {
                  props.state1 ? <Link to={"/users/login"} class="nav-link" href="#">
                  User Login 
                </Link> : <button onClick={() =>props.logout()}  className= 'nav-link' style={{background : "transparent", border : "none"}}>Logout</button> 
                }
                
                
              </li>
              <li class="nav-item">
                {
                  props.state2 ? <button onClick={() =>props.logout()}  className= 'nav-link' style={{background : "transparent", border : "none"}}>Logout</button> : <Link to={"/users/adminlogin"} class="nav-link" href="#">
                  Admin Login
                </Link> 
                }
                
                
              </li>
              <li classNameName="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
