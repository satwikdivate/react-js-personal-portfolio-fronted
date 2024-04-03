import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = ({ items }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSmall, setIsSmall] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    setIsSmall(screenWidth <= 768); // Set isSmall based on screen width
  }, [screenWidth]); // Re-run effect when screenWidth changes

  useEffect(() => {
    // Auto-slide functionality
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [items.length]); // Re-run effect when the number of items changes

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${isSmall ? currentIndex * 100 : currentIndex * 33.33}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img src={item.src} alt={item.title} className="project-image" />
              <div className="project-details">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.description}</p>
                <a
                  href={item.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
