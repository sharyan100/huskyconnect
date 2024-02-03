// Matches.js
import React, { useState } from 'react';
import MatchedUserCard from './MatchedUserCard';
import Chat from './Chat';

function Matches() {
  const initialMatchedUsers = [
    {
      name: 'Alice Thompson',
      major: 'Environmental Science',
      title: 'UW RSO: Environmental Club Meeting',
      content: 'Learn about eco-friendly initiatives and environmental projects.',
      img: `images/jb-profile.jpeg`,
    },
    {
      name: 'Elijah Rodriguez',
      major: 'Mechanical Engineering',
      title: 'Robotics Workshop',
      content: 'Explore the world of robotics and hands-on building projects.',
      img: `images/cj-profile.jpeg`,
    },
    {
      name: 'Olivia Martinez',
      major: 'Marketing',
      title: 'Marketing Strategy Seminar',
      content: 'Discover the latest trends and strategies in marketing.',
      img: `images/hc-profile.jpeg`,
    },
    {
      name: 'Samuel Lee',
      major: 'Psychology',
      title: 'Mindfulness and Stress Management Session',
      content: 'Learn techniques to manage stress and enhance mindfulness.',
      img: `images/hc-profile.jpeg`,
    },
  ];

  const [matchedUsers, setMatchedUsers] = useState(initialMatchedUsers);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeUser, setActiveUser] = useState(null);

  const handleFilter = () => {
    const filteredUsers = initialMatchedUsers.filter((user) => {
      // Change the condition to search by multiple properties
      return (
        user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        user.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        user.content.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        user.major.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    });
    setMatchedUsers(filteredUsers);
  };

  const handleUnmatch = (name) => {
    const updatedUsers = matchedUsers.filter((user) => user.name !== name);
    setMatchedUsers(updatedUsers);
  };

  const handleChat = (user) => {
    setActiveUser(user);
  };

  const matchedUserCards = matchedUsers.map((user, index) => (
    <MatchedUserCard
      key={index}
      user={user}
      onUnmatch={() => handleUnmatch(user.name)}
      onChat={() => handleChat(user)}
    />
  ));

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="matches-container">
      <div className="profiles-container">
        <h2>Matched Users</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          handleFilter();
        }}>
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
        {matchedUserCards}
      </div>
      <div className="chat-section">
        {activeUser && <Chat user={activeUser} />}
      </div>
    </div>
  );
}

export default Matches;
