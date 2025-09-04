import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Portfolio data
  const portfolioData = {
    'UUMI App': [
      {
        id: 1,
        image: '/assets/img/Project/UUMI_APP/UUMi_home.png',
        title: 'UUMI Home Screen',
        description: 'The main screen of the UUMI vocabulary learning app with a user-friendly interface.',
        tech: ['Swift', 'UIKit', 'Core Data']
      },
      {
        id: 2,
        image: '/assets/img/Project/UUMI_APP/UUMi_flashcard.png',
        title: 'UUMI Flashcard',
        description: 'Interactive flashcard feature for vocabulary learning, supporting effective memorization.',
        tech: ['iOS', 'Animation', 'UX/UI']
      },
      {
        id: 3,
        image: '/assets/img/Project/UUMI_APP/UUMi_Statistic.png',
        title: 'UUMI Statistics',
        description: 'Learning progress dashboard with intuitive charts.',
        tech: ['Charts', 'Analytics', 'Data Visualization']
      },
      {
        id: 4,
        image: '/assets/img/Project/UUMI_APP/UUMi_favorite_word.png',
        title: 'UUMI Favorite Words',
        description: 'User’s favorite vocabulary list.',
        tech: ['Core Data', 'Swift', 'iOS']
      },
      {
        id: 5,
        image: '/assets/img/Project/UUMI_APP/UUMi_launching_1.png',
        title: 'UUMI Launch Screen 1',
        description: 'The introduction screen of the app with smooth animation.',
        tech: ['UI/UX', 'Animation', 'Design']
      },
      {
        id: 6,
        image: '/assets/img/Project/UUMI_APP/UUMi_launching_2.png',
        title: 'UUMI Launch Screen 2',
        description: 'Onboarding screen guiding users through the app.',
        tech: ['Onboarding', 'UX Design', 'iOS']
      },
      {
        id: 7,
        image: '/assets/img/Project/UUMI_APP/UUMi_setting.png',
        title: 'UUMI Settings',
        description: 'Application settings screen with personalization options.',
        tech: ['Settings', 'Preferences', 'iOS']
      },
      {
        id: 8,
        image: '/assets/img/Project/UUMI_APP/UUMi_setting_2.png',
        title: 'UUMI Advanced Settings',
        description: 'Advanced settings for optimized learning experience.',
        tech: ['Configuration', 'User Experience', 'Swift']
      },
      {
        id: 9,
        image: '/assets/img/Project/UUMI_APP/UUMi_Suggestion_Word.png',
        title: 'UUMI Word Suggestions',
        description: 'Intelligent vocabulary suggestion feature based on learning progress.',
        tech: ['AI Suggestions', 'Machine Learning', 'iOS']
      },
      {
        id: 10,
        image: '/assets/img/Project/UUMI_APP/UUMi_ Splash_View.png',
        title: 'UUMI Splash Screen',
        description: 'The splash screen of the app with logo and branding.',
        tech: ['Splash Screen', 'Branding', 'UI Design']
      }
    ]
  };

  // Get all projects
  const getAllProjects = () => {
    return Object.values(portfolioData).flat();
  };

  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return getAllProjects();
    }
    return portfolioData[activeFilter] || [];
  };

  // Get available filters
  const getFilters = () => {
    return ['all', ...Object.keys(portfolioData)];
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        
        {/* Portfolio Filter Tabs */}
        <div className="portfolio-filters">
          {getFilters().map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {getFilteredProjects().map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <div className="portfolio-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
