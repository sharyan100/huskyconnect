// App.js
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
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    // Handle the creation of the post here
    console.log('New Post:', newPost);

    // Update the posts state to include the new post
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="profile" element={<Profile onCreatePost={handleCreatePost} />} />
          <Route path="login" element={<Login />} />
          <Route path="matches" element={<Matches />} />
          <Route path="/" element={<Users posts={posts} />} />
          <Route path="match" element={<Match />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 HuskyConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
