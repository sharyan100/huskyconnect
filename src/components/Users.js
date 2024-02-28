import React, { useState, useEffect, useCallback } from 'react';
import UserCard from './UserCard';
import SearchFilter from './SearchFilter';

const DEFAULT_IMAGE_PATH = 'images/uw-purple-background.jpeg';


const Users = ({ posts, latestUser, cared, onCareClick }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchedUsers = [
      {
        name: 'UW RSO: Coding Club Meeting',
        major: 'Computer Science',
        content: 'Discussing the latest programming trends and projects.',
        description: "Hey, I'm Diego, the founder of HuskyCoding. Join our Coding Club meeting to explore the world of programming!",
        imageSrc: `images/diego-garcia-profile.jpg`,
        visible: true,
      },
      {
        name: 'Campus Safety Tips',
        major: 'Psychology',
        content: 'Stay safe on campus with these essential safety tips.',
        description: "Hello, I'm Ayesha. Learn valuable safety tips to ensure a secure campus experience.",
        imageSrc: `images/ayesha-khan-profile.jpg`,
        visible: true,
      },
      {
        name: 'Upcoming Campus Event: Fall Festival',
        major: 'Business Administration',
        content: 'Join us for a day of fun, food, and festivities!',
        description: "Hi, I'm John. Exciting times ahead! Don't miss our upcoming Fall Festival event.",
        imageSrc: `images/john-davis-profile.jpg`,
        visible: true,
      },
      {
        name: 'Major Spotlight: Biology Research Opportunities',
        major: 'Biology',
        content: 'Explore research opportunities in the field of Biology.',
        description: "Greetings! I'm Emma. Dive into Biology research opportunities with us.",
        imageSrc: `images/emma-smith-profile.jpg`,
        visible: true,
      },
    ];

    // if an image is not provided by the user, a default image is used for error handling.
    
    if (latestUser && !latestUser.image) {
      fetchedUsers.unshift({
        name: latestUser.name,
        major: latestUser.major,
        content: latestUser.content,
        description: latestUser.description,
        imageSrc: DEFAULT_IMAGE_PATH,
        visible: true,
      });
    } else if (latestUser) {
      fetchedUsers.unshift({
        name: latestUser.name,
        major: latestUser.major,
        content: latestUser.content,
        description: latestUser.description,
        imageSrc: URL.createObjectURL(latestUser.image),
        visible: true,
      });
    }

  const visibleUsers = fetchedUsers.filter(user => !cared.includes(user.name));
  setUsers(visibleUsers);
}, [latestUser, cared]);

  const handleSwipeLeft = (index) => {
    const newUsers = [...users];
    newUsers[index].visible = false;
    setUsers(newUsers);
  };

  // const handleSwipeRight = (index) => {
  //   const newUsers = [...users];
  //   newUsers[index].visible = false;
  //   setUsers(newUsers);
  // };

  const handleSwipeRight = (userName) => {
    onCareClick(userName);
  };

  const handleFilter = useCallback((keyword) => {
    setSearchKeyword(keyword);
    const filtered = users.filter(user => (
      (user.name.toLowerCase().includes(keyword.toLowerCase()) ||
      user.content.toLowerCase().includes(keyword.toLowerCase()) ||
      user.major.toLowerCase().includes(keyword.toLowerCase()) ||
      user.description.toLowerCase().includes(keyword.toLowerCase())) &&
      !cared.includes(user.name)
    ));
    setFilteredUsers(filtered);
  }, [users, cared]);

  useEffect(() => {
    const filtered = searchKeyword === '' ? users : users.filter(user => (
      user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.content.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.major.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.description.toLowerCase().includes(searchKeyword.toLowerCase())
    ) && !cared.includes(user.name));
    setFilteredUsers(filtered);
  }, [searchKeyword, users, cared]);



  const userCards = filteredUsers.map((user, index) => (
    <UserCard
      key={user.name}
      {...user}
      onSwipeLeft={() => handleSwipeLeft(index)}
      onSwipeRight={() => handleSwipeRight(user.name)}
    />
  ));

  return (
    <div className="container">
      <SearchFilter onFilter={(keyword) => handleFilter(keyword)} />
      <div className="row">
        {userCards}
      </div>
    </div>
  );
};

export default Users;
