import React, { useEffect, useState } from "react";
import LogoSVG from "./LogoSVG";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  
  // List of strings to cycle through
  const subtitles = [
    "I'm iOS Developer",
    "I'm Software Engineer", 
    "I'm Business Analyst",
    "I'm Mobile Developer"
  ];
  
  const description = "Welcome to my portfolio. I'm passionate about creating innovative mobile applications and delivering exceptional user experiences.";

  useEffect(() => {
    const currentString = subtitles[currentStringIndex];
    
    if (!isDeleting && currentIndex < currentString.length) {
      // Typing effect
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + currentString[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timer);
      
    } else if (!isDeleting && currentIndex === currentString.length) {
      // Pause before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true);
        // Show description only after first complete cycle
        if (currentStringIndex === 0 && !showDescription) {
          setShowDescription(true);
        }
      }, 1500); // Pause duration
      return () => clearTimeout(timer);
      
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, 50); // Deleting speed (faster than typing)
      return () => clearTimeout(timer);
      
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next string
      setIsDeleting(false);
      setCurrentIndex(0);
      setCurrentStringIndex((prev) => (prev + 1) % subtitles.length);
    }
  }, [currentIndex, currentStringIndex, isDeleting, displayedText, subtitles, showDescription]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <img src="/assets/img/Cover-bg.jpeg" alt="Background" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Vuong Khac Duy</h1>
          <p className="hero-subtitle">
            <span className="typing-text">{displayedText}</span>
            <span className="cursor">|</span>
          </p>
          <div className={`hero-description ${showDescription ? 'show' : ''}`}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
