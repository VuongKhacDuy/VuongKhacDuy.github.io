import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PortfolioDetails from "./components/PortfolioDetails";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio-details" element={<PortfolioDetails />} />
            <Route path="/blog" element={<Blog />} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
