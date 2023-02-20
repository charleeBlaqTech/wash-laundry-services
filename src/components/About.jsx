import React from 'react'
import { Fragment } from 'react';
import "./AboutStyles.css";

import cleanerImg from "./images/cleaner2-removebg-preview.png"

const About = () => {
  return (
    <Fragment>
         <section className="about section-padding" id="about">
           
            <div className="about-contents-container">
                    <div className="about-img">
                        <div className="img-box">
                            <img src={cleanerImg} alt="img"/>
                            <div className="box box-1">
                                <span>2.5k</span>
                                <p>satisfied customers</p>
                            </div>
                        </div>

                    </div>
                    <div className="about-text">
                        <div className="section-title">
                            <span className="title">about us</span>
                            <h2 className="sub-title">we're cleaning since 2010</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et. Ab quis et velit dolorum
                            quidem! Sint soluta ipsa explicabo.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi corrupti dolore eaque
                            similique rerum nesciunt dolorum delectus placeat nostrum molestias?</p>
                    </div>
            
            </div>
        </section>
    </Fragment>
  )
}

export default About