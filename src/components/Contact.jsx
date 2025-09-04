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
              <i className="bx bx-map"></i>
            </div>
            <div className="contact-details">
              <h4>Location:</h4>
              <p>Thu Duc City, Ho Chi Minh, Viet Nam 71351</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bx bx-envelope"></i>
            </div>
            <div className="contact-details">
              <h4>Email:</h4>
              <p>vuongkhacduy@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bx bx-phone"></i>
            </div>
            <div className="contact-details">
              <h4>Call:</h4>
              <p>(+84) 902844839</p>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.69613817589408!3d10.836132889324676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112f!2zVGjhu6sgxJDhu6ljLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1725468000000!5m2!1svi!2s"
              width="100%" 
              height="350" 
              style={{border: 0, borderRadius: '10px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Thu Duc City Location">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
