import React, { useState } from 'react';
import UserCard from './UserCard';
import '../index.css';


const ProfileCarousel = ({ profiles, onCareClick}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide + profiles.length - 1) % profiles.length;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % profiles.length;
    setCurrentSlide(nextSlide);
  };

  

  return (
    <div className="carousel-container">
      <h2>Browse Posts</h2>
      <div className="carousel">
        {profiles.map((profile, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <UserCard
              name={profile.title}
              content=""
              description={profile.description}
              imageSrc={profile.imageUrl}
              onSwipeLeft={() => {}}
              onSwipeRight={() => onCareClick(profile.title)}
            />
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {profiles.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="prev" onClick={goToPrevSlide}>❮</button>
        <button className="next" onClick={goToNextSlide}>❯</button>
      </div>
    </div>
  );
};

export default ProfileCarousel;
