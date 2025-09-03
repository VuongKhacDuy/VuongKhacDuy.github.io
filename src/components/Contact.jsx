import React from "react";

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bx bx-envelope"></i>
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>vuongkhacduy@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bx bxl-linkedin"></i>
            </div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/duy-vuong-786146138</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bx bxl-github"></i>
            </div>
            <div className="contact-details">
              <h4>GitHub</h4>
              <p>github.com/VuongKhacDuy</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
