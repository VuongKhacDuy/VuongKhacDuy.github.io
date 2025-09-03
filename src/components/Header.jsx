import React from "react";
import "../../assets/css/layout-header-footer-menu.css";

const Header = () => (
  <header id="header">
    <div className="d-flex flex-column">
      <div className="profile">
        <img src="/assets/img/iron-man.png" alt="Iron Man" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="/">Vuong Khac Duy</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="mailto:vuongkhacduy@gmail.com" className="gmail"><i className="bx bxl-gmail"></i></a>
          <a href="skype:vuongkhacduy@gmail.com?chat" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="https://www.linkedin.com/in/duy-vuong-786146138/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="https://gitlab.com/vuongkhacduy" className="gitlab"><i className="bx bxl-gitlab"></i></a>
          <a href="https://github.com/VuongKhacDuy" className="github"><i className="bx bxl-github"></i></a>
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="/#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="/#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="/#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="/blog" className="nav-link"><i className="bx bx-book"></i> <span>Blog</span></a></li>
          <li><a href="/#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          <li><a href="/assets/cv/VuongKhacDuy_iOS Developer.pdf" className="nav-link" download><i className="bx bx-download"></i> <span>Download CV</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
