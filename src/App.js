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

  const handleCreatePost = (newUser) => {
    console.log('New User:', newUser);
    setLatestUser(newUser);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="profile" element={<Profile onCreatePost={handleCreatePost} />} />
          <Route path="login" element={<Login />} />
          <Route path="matches" element={<Matches />} />
          <Route
            path="/"
            element={<Users latestUser={latestUser} />} 
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
