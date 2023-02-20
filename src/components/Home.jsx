import React from 'react'
import "./HomeStyles.css"
import { Fragment } from 'react'
import { HashLink } from 'react-router-hash-link';
import cleanerImg from "./images/cleaner-removebg-preview.png";
import About from "./About";
import Service from "./Service";
import Pricing from "./Pricing";
import WorkTeam from "./WorkTeam";
import Contact from "./Contact";


const Home = () => {
  return (

    <Fragment>
         
        <section className="home" id="home">
        
            <div className="home-contents-container">
                    <div className="home-text">
                        <h1>need cleaning services ?</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam cupiditate fugit nobis
                            officia voluptate nostrum!</p>
                        <div className="btn-wrap">
                            <HashLink to="#about" className="btn">Know More</HashLink>
                        </div>
                    </div>
                    <div className="home-img">
                        <div className="circle-wrap">
                            <div className="circle"></div>
                        </div>
                        <img src={cleanerImg} alt="img"/>
                    </div>
            </div>
        </section>
        <hr />
        <About/>
        <hr />
        <Service/>
        <hr />
        <Pricing/>
        <hr />
        <WorkTeam/>
        <hr />
        <Contact/>
        
    </Fragment>
   
  )
}

export default Home