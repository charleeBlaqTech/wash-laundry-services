import React, { Fragment } from 'react';
import "./WorkTeamStyles.css";
import teamImg1 from "./images/team_cleaner_3-removebg-preview.png";
import teamImg2 from "./images/cleaner_team_2-removebg-preview.png";
import teamImg3 from "./images/team_lead-removebg-preview.png";



const WorkTeam = () => {
  return (
    <Fragment>
          <section className="team section-padding" id="team">
            <div className="teams-contents-container">
                <div className="section-title">
                    <span className="title">team</span>
                    <h2 className="sub-title">meet our team</h2>
                </div>
                <div className="team-items-wrapper">
                    
                    <div className="team-item">
                        <div className="img-box teams">
                            <img src={teamImg3} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>testimony aire</h3>
                            <p>team leader</p>
                        </div>
                    </div>
                   
                    <div className="team-item">
                        <div className="img-box teams">
                            <img src={teamImg2} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>leach bate</h3>
                            <p>office cleaner</p>
                        </div>
                    </div>
                  
                    <div className="team-item">
                        <div className="img-box teams">
                            <img src={teamImg1} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>bush john & Bate Kate</h3>
                            <p>home cleaner</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default WorkTeam