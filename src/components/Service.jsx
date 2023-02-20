import React, { Fragment } from 'react'
import "./ServiceStyles.css"


import Img1 from "./images/carpet.jpeg";
import Img2 from "./images/home-cleaning.jpeg";
import Img3 from "./images/bathroom-cleaning.jpeg";
import Img4 from "./images/office-cleaning.jpeg";


const Service = () => {
  return (
    <Fragment>
        <section className="services section-padding" id="service">
          
            <div className="services-contents-container">
                <div className="section-title">
                    <span className="title">services</span>
                    <h2 className="sub-title">what we do</h2>
                </div>
                <div className="service-image-wrapper">
                    
                    <div className="services-item">
                        <div className="img-box img">
                            <img src={Img1} alt="carpet"/>
                        </div>
                        <h3>carpet washing</h3>
                    </div>
                    
                    <div className="services-item">
                        <div className="img-box img">
                            <img src={Img2} alt="home"/>
                        </div>
                        <h3>home cleaning</h3>
                    </div>
                    
                    <div className="services-item">
                        <div className="img-box img">
                            <img src={Img3} alt="bathroom"/>
                        </div>
                        <h3>bathroom cleaning</h3>
                    </div>
                   
                    <div className="services-item">
                        <div className="img-box img">
                            <img src={Img4} alt="office"/>
                        </div>
                        <h3>office cleaning</h3>
                    </div>
                    
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Service