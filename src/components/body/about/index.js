import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/index';
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi,
          <br /> <span className="info-name">I'm María Ten</span>.
          <br /> Software Engineer
          <p>
            I am an enthusiastic, perseverant Software Engineer Trainee at
            Academy.
            <br />
            I started my career in tech as an Information Analyst for Public
            Health Scotland after graduating with a First from the University of
            Glasgow, where I learnt about data analysis, statistics and coding
            in R.
            <br />I am passionate about tech for social good and continuous
            learning.
          </p>
        </div>
        <div className="about-photo">
          <img
            alt="keyboard drawing"
            src={require('../../../assets/coding.png')}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
