import React from "react";

const Resume = () => (
  <section id="resume" className="section">
    <div className="container">
      <div className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="resume-content">
        <div className="resume-left-column">
          {/* Summary Section */}
          <div className="resume-section">
            <h3>Summary</h3>
            <div className="summary-content">
              <h4>VUONG KHAC DUY</h4>
              <p>
                Application developer with 5+ years of experience develop application for iOS operating system. I am presently employed as an iOS developer at CMC Global, where I am involved in a number of mobile application projects. Being experienced and well versed in the development of user-friendly.
              </p>
              <ul className="contact-details">
                <li>Thu Duc City, Ho Chi Minh, Viet Nam, 71351</li>
                <li>(+84) 962844379</li>
                <li>vuongkhacduy@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>BACHELOR OF COMPUTER SCIENCE</h4>
              <h5>University of the West of England</h5>
              <p className="duration">2017 - 2019</p>
              <p className="location">Frenchay Campus, Coldharbour Lane, Bristol, BS16 1QY, United Kingdom</p>
            </div>
            
            <div className="education-item">
              <h4>BACHELOR OF COMPUTER SCIENCE</h4>
              <h5>International University</h5>
              <p className="duration">2014 - 2017</p>
              <p className="location">Quarter 6, Linh Trung Ward, Thu Duc City, HCMC</p>
            </div>
          </div>
        </div>

        <div className="resume-right-column">
          {/* Professional Experience Section */}
          <div className="resume-section">
            <h3>Professional Experience</h3>
            
            <div className="experience-item">
              <h4>IOS DEVELOPER - SKG TECHNOLOGY JOINT STOCK COMPANY</h4>
              <p className="duration">2024 - Current</p>
              <p className="location">
                Lux Airport Building No. 2, Hang No Street, Ward 2, Tan Binh District, Ho Chi Minh City
              </p>
              <ul>
                <li>Maintained existing functions, and created new ones based on customer requirements.</li>
                <li>Supervise the assessment of all materials in order to ensure quality and accuracy of the productions.</li>
                <li>Manage time, and estimate plan to ensure completing the app on time.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h4>MID IOS DEVELOPER - CMC-GLOBAL</h4>
              <p className="duration">2022 - 2023</p>
              <p className="location">
                CMC Creative City, Duy Tan Street 19, District 7 Tan Thuan Zone Ho Chi Minh City
              </p>
              <ul>
                <li>Solved problems as a team leader, maintained existing functions, and created new ones based on customer requirements.</li>
                <li>Delegated tasks to development team members and provided guidance on all aspects of the project.</li>
                <li>Supervised the assessment of all materials to ensure quality and accuracy of the production.</li>
                <li>Managed time and estimated plans to ensure the app was completed on schedule.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h4>JUNIOR IOS DEVELOPER - FPT SOFTWARE</h4>
              <p className="duration">2021 - 2022</p>
              <p className="location">
                Long Thanh My Ward 9 District, Thu Duc City, Ho Chi Minh City 71216
              </p>
              <ul>
                <li>Participate in software development and support</li>
                <li>Product quality assurance</li>
              </ul>
            </div>

            <div className="experience-item">
              <h4>INTERN + FRESHER IOS DEVELOPER - TRAVELMAP AND TRAVEL SOCIAL NETWORK JOINT STOCK COMPANY</h4>
              <p className="duration">2019 - 2021</p>
              <p className="location">
                Binh Thanh District, Ho Chi Minh City, Viet Nam
              </p>
              <ul>
                <li>Participate in software development and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
