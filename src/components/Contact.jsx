import React, { Fragment } from 'react';
import "./ContactStyles.css";

const Contact = () => {
  return (
    <Fragment>
        <section className="contact section-padding" id="contact">
            <div className="contact-contents-container">
                <div className="section-title">
                    <span className="title">contact us</span>
                    <h2 className="sub-title">have any question ?</h2>
                </div>
                <div className="contact-wrapper contact-grid">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Address</h3>
                            <p>8, Ekere Street comfort Oboh,kirikiri town, lagos</p>
                        </div>


                        <div className="contact-info-item">
                            <i className="fas fa-phone"></i>
                            <h3>Call Us</h3>
                            <p>+234 8101605165..</p>
                        </div>
                        <div className="contact-info-item">
                            <i className="fas fa-envelope"></i>
                            <h3>Email Us</h3>
                            <p>blaqwayschannel@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="contact-form">
                        <form >
                            <div className="input-box">
                                <input type="text" placeholder="Name" className="input-control" name="name" required/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Email" className="input-control" name="email" required/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Phone" className="input-control" name="phone" required/>
                            </div>
                            <div className="input-box">
                                <textarea placeholder="Message" className="input-control"
                                name="message"
                                ></textarea>
                            </div>
                            <div className="btn-wrap">
                                <button type="submit" className="btn"> Send Message </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Contact