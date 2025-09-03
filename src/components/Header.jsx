import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/layout-header-footer-menu.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-logo">
            <img src="/assets/img/iron-man.png" alt="Iron Man" />
            <span>Vuong Khac Duy</span>
          </div>
          <button className="hamburger-btn" onClick={toggleMobileMenu}>
            <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'show' : ''}`} onClick={toggleMobileMenu}></div>

      {/* Sidebar */}
      <header id="header" className={isMobileMenuOpen ? 'mobile-open' : ''}>
        <div className="d-flex flex-column" style={{height: '100%', justifyContent: 'space-between'}}>
          <div>
            <div className="profile">
              <img src="/assets/img/iron-man.png" alt="Iron Man" className="img-fluid rounded-circle" />
              <h1 className="text-light"><a href="/">Vuong Khac Duy</a></h1>
            </div>
            <br />
            <div className="social-links mt-3 text-center">
              <a href="mailto:vuongkhacduy@gmail.com" className="gmail" title="Email"><i className="bx bxl-gmail"></i></a>
              <a href="skype:vuongkhacduy@gmail.com?chat" className="google-plus" title="Skype"><i className="bx bxl-skype"></i></a>
              <a href="https://www.linkedin.com/in/duy-vuong-786146138/" className="linkedin" title="LinkedIn"><i className="bx bxl-linkedin"></i></a>
              <a href="https://gitlab.com/vuongkhacduy" className="gitlab" title="GitLab"><i className="bx bxl-gitlab"></i></a>
              <a href="https://github.com/VuongKhacDuy" className="github" title="GitHub"><i className="bx bxl-github"></i></a>
            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="nav-link active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }} className="nav-link"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} className="nav-link"><i className="bx bx-briefcase"></i> <span>Portfolio</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
              <li><a href="/blog" className="nav-link"><i className="bx bx-book"></i> <span>Blog</span></a></li>
              <li><a href="/assets/cv/VuongKhacDuy_iOS Developer.pdf" className="nav-link" download><i className="bx bx-download"></i> <span>Download CV</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="copyright">
          &copy; 2025 <b>Copyright Vuong Khac Duy</b>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;