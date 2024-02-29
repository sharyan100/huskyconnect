import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Matches from './components/Matches';
import Users from './components/Users';
import Match from './components/Match';
import Login from './components/Login';
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
    setLatestUser(newUser);
  };

  const handleFlag = (userName) => {
    // Placeholder for logic to handle flagging a user
    console.log(`Flagged user: ${userName}`);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="profile" element={<Profile onCreatePost={handleCreatePost} />} />
          <Route path="login" element={<Login />} />
          <Route path="matches" element={<Matches cared={cared} />} />
          <Route
            path="/"
            element={<Users latestUser={latestUser} cared={cared} onCareClick={handleCareClick} onFlag={handleFlag} />}
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
