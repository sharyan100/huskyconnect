import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ name, major, title, content, description, imageSrc, onSwipeLeft, onSwipeRight }) => {
  const [visible, setVisible] = useState(true);

  const handleSwipeLeft = () => {
    setVisible(false);
    onSwipeLeft();
  };

  const handleSwipeRight = () => {
    setVisible(false);
    onSwipeRight();
  };

  if (!imageSrc) {
    return (
      <div className="col-6 col-lg-3">
        <div className="user mb-4 uw-themed-card">
          <div className="user-body">
            <div className="placeholder-image">
              <p className="text-center">Image Required</p>
            </div>
            <div>
              <h2>{name}</h2>
              <p>Major: {major}</p>
              <h4>{title}</h4>
              <p>{content}</p>
              <p>{description}</p> 
            </div>
            <div className="button-container">
              <button className="swipe-button dont-care" onClick={handleSwipeLeft}>Don't Care</button>
              <Link to="/match">
                <button className="swipe-button care" onClick={handleSwipeRight}>Care</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="col-6 col-lg-3">
      <div className="user mb-4 uw-themed-card">
        <div className="user-body">
        <img className="pb-3 profile-image img-fluid" src={imageSrc} alt={`Profile of ${name}`} style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <div>
            <h2>{name}</h2>
            <p>Major: {major}</p>
            <h4>{title}</h4>
            <p>{content}</p>
            <p>{description}</p> 
          </div>
          <div className="button-container">
            <button className="swipe-button dont-care" onClick={handleSwipeLeft}>Don't Care</button>
            <Link to="/match">
              <button className="swipe-button care" onClick={handleSwipeRight}>Care</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
