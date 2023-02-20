import React, { Fragment } from 'react';
import "./PricingStyles.css"


const Pricing = () => {
  return (
    <Fragment>
         <section className="pricing section-padding" id="pricing">

            <div className="pricing-contents-container">

                
                <div className="section-title">
                    <span className="title">pricing</span>
                    <h2 className="sub-title">our pricing plans</h2>
                </div>

                <div className="price-listing-wrapper">
                    
                    <div className="pricing-item">
                        <div className="pricing-header">
                            <h3>basic</h3>
                            <div className="price"><span>$500</span>monthly</div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>
                                    <i className="fas fa-check"></i>carpet washing
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>home cleaning
                                </li>
                                <li>
                                    <i className="fas fa-times"></i>bathroom cleaning
                                </li>
                                <li>
                                    <i className="fas fa-times"></i>office cleaning
                                </li>
                                <li>
                                    <i className="fas fa-times"></i>car cleaning
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#" className="btn">get started</a>
                        </div>
                    </div>
                   
                    <div className="pricing-item">
                        <div className="pricing-header">
                            <h3>standard</h3>
                            <div className="price"><span>$700</span>monthly</div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>
                                    <i className="fas fa-check"></i>carpet washing
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>home cleaning
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>bathroom cleaning
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>office cleaning
                                </li>
                                <li>
                                    <i className="fas fa-times"></i>car cleaning
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#" className="btn">get started</a>
                        </div>
                    </div>
                   
                    <div className="pricing-item">
                        <div className="pricing-header">
                            <h3>premium</h3>
                            <div className="price"><span>$1000</span>monthly</div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>
                                    <i className="fas fa-check"></i>carpet washing
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>home cleaning
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>bathroom cleaning
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>office cleaning
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>car cleaning
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#" className="btn">get started</a>
                        </div>
                    </div>
                   
                </div>
            </div>
           
        </section>
    </Fragment>
  )
}

export default Pricing