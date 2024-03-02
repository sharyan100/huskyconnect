import React, { useState, useEffect } from 'react';
import MatchedUserCard from './MatchedUserCard';
import Chat from './Chat';

function Matches({ cared }) {
  const initialMatchedUsers = [
    {
      name: 'UW RSO: Coding Club Meeting',
      major: 'Computer Science',
      content: 'Discussing the latest programming trends and projects.',
      img: `images/diego-garcia-profile.jpg`,
    },
    {
      name: 'Campus Safety Tips',
      major: 'Psychology',
      content: 'Stay safe on campus with these essential safety tips.',
      img: `images/ayesha-khan-profile.jpg`,
    },
    {
      name: 'Upcoming Campus Event: Fall Festival',
      major: 'Business Administration',
      content: 'Join us for a day of fun, food, and festivities!',
      img: `images/john-davis-profile.jpg`,
    },
    {
      name: 'Major Spotlight: Biology Research Opportunities',
      major: 'Biology',
      content: 'Explore research opportunities in the field of Biology.',
      img: `images/emma-smith-profile.jpg`,
    },
  ];

  const [matchedUsers, setMatchedUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    console.log("Cared list in Matches:", cared);
    const filteredByCared = initialMatchedUsers.filter(user => cared.includes(user.name));
    console.log("Filtered by cared:", filteredByCared);
  
    const filteredByKeyword = filteredByCared.filter(user =>
      user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.content.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.major.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  
    console.log("Filtered by keyword:", filteredByKeyword);
    setMatchedUsers(filteredByKeyword);
  }, [cared, searchKeyword]);

  const handleUnmatch = name => {
    const updatedUsers = matchedUsers.filter(user => user.name !== name);
    setMatchedUsers(updatedUsers);
  };

  const handleChat = user => {
    setActiveUser(user);
  };

  const handleSearchKeywordChange = event => {
    setSearchKeyword(event.target.value);
  };

  const matchedUserCards = matchedUsers.map((user, index) => (
    <MatchedUserCard
      key={index}
      user={user}
      onUnmatch={() => handleUnmatch(user.name)}
      onChat={() => handleChat(user)}
    />
  ));

  return (
    <div className="matches-container">
      <div className="profiles-container">
        <h2>Saved Posts</h2>
        <p> Click "care" on any post you find interesting and it will save here if you are logged in!</p>
        <form onSubmit={event => {
          event.preventDefault();
        }} className="filter-bar">
          <div>
            <label htmlFor="searchKeyword">Search by Keyword:</label>
            <input
              type="text"
              id="searchKeyword"
              name="searchKeyword"
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
            />
            <button type="submit">Filter</button>
          </div>
        </form>
        {matchedUserCards.length > 0 ? matchedUserCards : <p>No posts found.</p>}
      </div>
      <div className="chat-section">
        {activeUser && <Chat user={activeUser} />}
      </div>
    </div>
  );
}

export default Matches;
