import React from "react";

const PortfolioDetails = () => (
  <section id="portfolio-details" className="portfolio-details">
    <div className="container">
      <div className="section-title">
        <h2>Portfolio Details</h2>
        <p>Chi tiết dự án cá nhân, sản phẩm đã thực hiện.</p>
      </div>
      {/* Thêm nội dung chi tiết dự án tại đây, ví dụ: */}
      <div className="portfolio-details-content">
        <h3>UUMI App</h3>
        <img src="/assets/img/Project/UUMI_APP/UUMi_home.png" alt="UUMI App Home" style={{maxWidth: '300px'}} />
        <p>Ứng dụng học từ vựng tiếng Anh cho trẻ em. Các chức năng: flashcard, thống kê, gợi ý từ, cài đặt cá nhân...</p>
        {/* Thêm các hình ảnh, mô tả, link demo, v.v. */}
      </div>
    </div>
  </section>
);

export default PortfolioDetails;
