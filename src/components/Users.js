import React, { useState, useEffect, useCallback } from 'react';
import UserCard from './UserCard';
import SearchFilter from './SearchFilter';

const Users = ({ posts, latestUser }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchedUsers = [
      {
        name: 'Diego Garcia',
        major: 'Computer Science',
        title: 'UW RSO: Coding Club Meeting',
        content: 'Discussing the latest programming trends and projects.',
        description: "Hey, I'm Diego, the founder of HuskyCoding. Join our Coding Club meeting to explore the world of programming!",
        imageSrc: `images/diego-garcia-profile.jpg`,
        visible: true,
      },
      {
        name: 'Ayesha Khan',
        major: 'Psychology',
        title: 'Campus Safety Tips',
        content: 'Stay safe on campus with these essential safety tips.',
        description: "Hello, I'm Ayesha. Learn valuable safety tips to ensure a secure campus experience.",
        imageSrc: `images/ayesha-khan-profile.jpg`,
        visible: true,
      },
      {
        name: 'John Davis',
        major: 'Business Administration',
        title: 'Upcoming Campus Event: Fall Festival',
        content: 'Join us for a day of fun, food, and festivities!',
        description: "Hi, I'm John. Exciting times ahead! Don't miss our upcoming Fall Festival event.",
        imageSrc: `images/john-davis-profile.jpg`,
        visible: true,
      },
      {
        name: 'Emma Smith',
        major: 'Biology',
        title: 'Major Spotlight: Biology Research Opportunities',
        content: 'Explore research opportunities in the field of Biology.',
        description: "Greetings! I'm Emma. Dive into Biology research opportunities with us.",
        imageSrc: `images/emma-smith-profile.jpg`,
        visible: true,
      },
    ];

    if (latestUser) {
      fetchedUsers.unshift({
        name: latestUser.name,
        major: latestUser.major,
        title: latestUser.title,
        content: latestUser.content,
        description: latestUser.description,
        imageSrc: URL.createObjectURL(latestUser.image),
        visible: true,
      });
    }

    setUsers(fetchedUsers);
  }, [latestUser]);

  const handleSwipeLeft = (index) => {
    const newUsers = [...users];
    newUsers[index].visible = false;
    setUsers(newUsers);
  };

  const handleSwipeRight = (index) => {
    const newUsers = [...users];
    newUsers[index].visible = false;
    setUsers(newUsers);
  };

  const handleFilter = useCallback((keyword) => {
    setSearchKeyword(keyword);
    const filteredUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(keyword.toLowerCase()) ||
        user.title.toLowerCase().includes(keyword.toLowerCase()) ||
        user.content.toLowerCase().includes(keyword.toLowerCase()) ||
        user.major.toLowerCase().includes(keyword.toLowerCase()) ||
        user.description.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteredUsers(filteredUsers);
  }, [users]);

  useEffect(() => {
    if (searchKeyword === '') {
      setFilteredUsers(users);
    } else {
      handleFilter(searchKeyword);
    }
  }, [searchKeyword, users, handleFilter]);


  const userCards = filteredUsers.map((user, index) => (
    <UserCard
      key={user.name}
      {...user}
      onSwipeLeft={() => handleSwipeLeft(index)}
      onSwipeRight={() => handleSwipeRight(index)}
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
