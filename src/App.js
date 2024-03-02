import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Matches from './components/Matches';
import Users from './components/Users';
import Match from './components/Match';
import Login from './components/Login';
import ProfileCarousel from './components/ProfileCarousel';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [latestUser, setLatestUser] = useState(null);
  const [cared, setCared] = useState([]);

  const handleCareClick = userName => {
    setCared(currentCared => {
      if (!currentCared.includes(userName)) {
        return [...currentCared, userName];
      }
      return currentCared;
    });
  };

  const handleCreatePost = (newUser) => {
    console.log('New User:', newUser);
    setLatestUser(newUser);
  };

  const handleFlag = (userName) => {
    console.log(`Flagged user: ${userName}`);
  };

  const carouselProfiles = [
    { 
      title: 'New Sustainability Workshop Series',
      imageUrl: 'images/post1.jpg',
      description: 'Join us for a series of workshops focused on sustainability and environmental conservation. Explore ways to make a positive impact on the planet!',
      major: 'Environmental Science',
      content: 'Learn about sustainability and environmental conservation.'
    },
    { 
      title: 'Career Fair 2024 Registration Now Open',
      imageUrl: 'images/post2.jpg',
      description: 'Don\'t miss your chance to connect with top employers! Register now for the Career Fair 2024 and explore exciting job opportunities in your field.',
      major: 'Career Development',
      content: 'Explore job opportunities and connect with potential employers.'
    },
    { 
      title: 'Biology Research Opportunities',
      imageUrl: 'images/post3.jpg',
      description: 'Interested in biology research? Learn about upcoming opportunities to get involved in cutting-edge projects and make valuable contributions to the field!',
      major: 'Biology',
      content: 'Explore research opportunities in the field of biology.'
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="newPost" element={<Profile onCreatePost={handleCreatePost} />} />
          <Route path="login" element={<Login />} />
          <Route path="saved" element={<Matches cared={cared} />} />
          <Route
            path="/"
            element={
              <>
                <Users
                  latestUser={latestUser}
                  cared={cared}
                  onCareClick={handleCareClick}
                  onFlag={handleFlag}
                />
                <ProfileCarousel profiles={carouselProfiles} onCareClick={handleCareClick} onFlag={handleFlag} /> {/* Pass onFlag here */}
              </>
            }
          />
          <Route path="match" element={<Match />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; Husky Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
