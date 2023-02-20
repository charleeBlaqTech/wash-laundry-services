import React, { Fragment,useState,useRef } from 'react';
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
    
    window.addEventListener("scroll", changeHeaderBg );




    const navUlRef= useRef();
    const navRef= useRef();

    const handleClick= ()=>{
      navUlRef.current.classList.toggle("showNavMenu");
      navRef.current.classList.toggle("showNav")
    }


      
  return (
    <Fragment>
        <header className={isScrolled ? "header bg-reveal":" header"} >
            <div className="navBar-container">
                <div className="logo"><Link to="/">WASH<span>Cleaning Service</span></Link></div>
                <button type="button" class="nav-toggler js-nav-toggler">
                    <span><i className='fa fa-bars' onClick={handleClick}></i></span>
                </button>

                
                <nav className="nav js-nav" ref={navRef}>
                    <ul className='nav-ul'   ref={navUlRef}>
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={handleClick}>About</NavLink></li>
                        <li><NavLink to="/service" onClick={handleClick}>Services</NavLink></li>
                        <li><NavLink to="/pricing" onClick={handleClick}>Pricing</NavLink></li>
                        <li><NavLink to="/team" onClick={handleClick}>Team</NavLink></li>
                        <li><NavLink to="/contact" onClick={handleClick}>Contact</NavLink></li>
                        <i className="fas fa-times" onClick={handleClick}></i>
                    </ul>
                </nav>
            </div>
        </header>
    </Fragment>
  )
}

export default NavBar