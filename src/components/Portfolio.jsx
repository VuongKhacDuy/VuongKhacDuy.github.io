import React from "react";

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Các dự án cá nhân, sản phẩm đã thực hiện.</p>
      </div>
      {/* Thêm danh sách dự án tại đây, ví dụ: */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h3>UUMI App</h3>
          <img src="/assets/img/Project/UUMI_APP/UUMi_home.png" alt="UUMI App Home" style={{maxWidth: '300px'}} />
          <p>Ứng dụng học từ vựng tiếng Anh cho trẻ em.</p>
        </div>
        {/* Thêm các dự án khác tương tự */}
      </div>
    </div>
  </section>
);

export default Portfolio;
