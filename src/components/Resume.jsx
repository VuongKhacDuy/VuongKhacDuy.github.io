import React from "react";

const Resume = () => (
  <section id="resume" className="section">
    <div className="container">
      <div className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="resume-content">
        <div className="resume-section">
          <h3>Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior iOS Developer</h4>
            <h5>Company Name • 2022 - Present</h5>
            <p>
              Leading iOS development projects, mentoring junior developers, 
              and implementing cutting-edge mobile solutions.
            </p>
          </div>
          <div className="resume-item">
            <h4>iOS Developer</h4>
            <h5>Previous Company • 2020 - 2022</h5>
            <p>
              Developed and maintained iOS applications, collaborated with 
              cross-functional teams to deliver high-quality products.
            </p>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Computer Science</h4>
            <h5>University Name • 2016 - 2020</h5>
            <p>
              Specialized in Software Engineering and Mobile Development.
            </p>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill-item">Swift</div>
            <div className="skill-item">Objective-C</div>
            <div className="skill-item">UIKit</div>
            <div className="skill-item">SwiftUI</div>
            <div className="skill-item">Core Data</div>
            <div className="skill-item">REST APIs</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">Xcode</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
