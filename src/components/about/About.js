import React from 'react';
import aboutimg from '../../assets/about.svg'
import './About.css'

const About = () => {
  return <div className='about-container' id="about">
      <div className="about-row">
          <div className="about-col">
      <h2 className="about-title">ABOUT CET WOMEN TECHNOHUB</h2>
      <p className="about">
          <span>CET's very own Women Technical Community!
This is an initiative from the Lady Representatives of the College Union 2022; Ankitha Jazy (Fourth year AEI) and Anagha Sivakumar (Third year EEE).</span><br /> <br />
      CET Women TechnoHub is conceptualised to give a firm and concrete start to all the aspiring young girls out there to explore their technical proficiency. It provides a chance to explore all the available technical and non-technical topics, helps girls choose the right one for them and enables them to gain full proficiency in it via a number of activities. The activities range from project implementation to doubt clarification sessions with expert seniors.
      <br></br><br></br>

      </p>
      </div>
      <div className="about-col">
          <img src={aboutimg} alt="women technohub" />
      </div>
      </div>
      <div className="last-lines">
      So, come grab the opportunity at the earliest to unleash the technical wizard in you girls!

      </div>
  </div>;
};

export default About;
