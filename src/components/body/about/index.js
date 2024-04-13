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
          <br /> Passionate about technology and social good
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
