import React from "react";

const Portfolio = () => (
  <section id="portfolio" className="section">
    <div className="container">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p style={{color: '#eee', fontSize: '1.2rem'}}>Các dự án cá nhân, sản phẩm đã thực hiện.</p>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-image">
            <img src="/assets/img/Project/UUMI_APP/UUMi_home.png" alt="UUMI App Home" />
          </div>
          <div className="portfolio-info">
            <h3>UUMI App</h3>
            <p>Ứng dụng học từ vựng tiếng Anh cho trẻ em với giao diện thân thiện và tính năng flashcard thông minh.</p>
            <div className="portfolio-tech">
              <span>Swift</span>
              <span>UIKit</span>
              <span>Core Data</span>
            </div>
          </div>
        </div>
        
        <div className="portfolio-item">
          <div className="portfolio-image">
            <img src="/assets/img/Project/UUMI_APP/UUMi_flashcard.png" alt="UUMI Flashcard" />
          </div>
          <div className="portfolio-info">
            <h3>Flashcard Feature</h3>
            <p>Tính năng học từ vựng với flashcard tương tác, hỗ trợ ghi nhớ hiệu quả.</p>
            <div className="portfolio-tech">
              <span>iOS</span>
              <span>Animation</span>
              <span>UX/UI</span>
            </div>
          </div>
        </div>
        
        <div className="portfolio-item">
          <div className="portfolio-image">
            <img src="/assets/img/Project/UUMI_APP/UUMi_Statistic.png" alt="UUMI Statistics" />
          </div>
          <div className="portfolio-info">
            <h3>Statistics Dashboard</h3>
            <p>Bảng thống kê tiến độ học tập với biểu đồ trực quan và báo cáo chi tiết.</p>
            <div className="portfolio-tech">
              <span>Charts</span>
              <span>Analytics</span>
              <span>Data Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
