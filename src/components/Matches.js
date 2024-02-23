import React, { useState, useEffect } from 'react';
import MatchedUserCard from './MatchedUserCard';
import Chat from './Chat';

function Matches({ cared }) {
  const initialMatchedUsers = [
    {
      name: 'Diego Garcia',
      major: 'Computer Science',
      title: 'UW RSO: Coding Club Meeting',
      content: 'Discussing the latest programming trends and projects.',
      img: `images/diego-garcia-profile.jpg`,
    },
    {
      name: 'Ayesha Khan',
      major: 'Psychology',
      title: 'Campus Safety Tips',
      content: 'Stay safe on campus with these essential safety tips.',
      img: `images/ayesha-khan-profile.jpg`,
    },
    {
      name: 'John Davis',
      major: 'Business Administration',
      title: 'Upcoming Campus Event: Fall Festival',
      content: 'Join us for a day of fun, food, and festivities!',
      img: `images/john-davis-profile.jpg`,
    },
    {
      name: 'Emma Smith',
      major: 'Biology',
      title: 'Major Spotlight: Biology Research Opportunities',
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
      user.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
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
        <h2>Matched Users</h2>
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
        {matchedUserCards.length > 0 ? matchedUserCards : <p>No matches found.</p>}
      </div>
      <div className="chat-section">
        {activeUser && <Chat user={activeUser} />}
      </div>
    </div>
  );
}

export default Matches;
