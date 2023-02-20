import React, { Fragment,useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./NavBar.css";




const NavBar = () => {

    const [isScrolled, setIsScrolled]= useState(false);

    function changeHeaderBg(){
      if(window.scrollY > 12){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    
  
    window.addEventListener("scroll", changeHeaderBg )


      
  return (
    <Fragment>
        <header className={isScrolled ? "header bg-reveal":" header"} >
            <div className="navBar-container">
                <div className="logo"><Link to="/">WASH<span>Cleaning Service</span></Link></div>
                <button type="button" class="nav-toggler js-nav-toggler">
                    <span><i className='fa fa-bars'></i></span>
                </button>

                
                <nav className="nav js-nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </Fragment>
  )
}

export default NavBar