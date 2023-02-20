import React, { Fragment } from 'react';
import "./FooterStyles.css"

const Footer = () => {
  return (
    <Fragment>
        <div className="footer">
            <div className="container">
                <h3>follow us</h3>
                <div className="social-links">
                    <a href="https://daudu-portfolio.web.app" title="facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://daudu-portfolio.web.app" title="twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://daudu-portfolio.web.app" title="instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://daudu-portfolio.web.app" title="youtube"><i className="fab fa-youtube"></i></a>
                </div>
                <p className="copyright">copyright@daudu_charles</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer