import React from "react";

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>iOS Developer & Software Engineer</h3>
          <p>
            I am a passionate iOS developer with extensive experience in creating 
            innovative mobile applications. My expertise spans across Swift, Objective-C, 
            and modern iOS frameworks.
          </p>
          <div className="about-info">
            <div className="info-item">
              <strong>Name:</strong> Vuong Khac Duy
            </div>
            <div className="info-item">
              <strong>Email:</strong> vuongkhacduy@gmail.com
            </div>
            <div className="info-item">
              <strong>Phone:</strong> +84 xxx xxx xxx
            </div>
            <div className="info-item">
              <strong>Location:</strong> Vietnam
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
