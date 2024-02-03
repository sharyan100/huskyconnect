import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);

  // Fetch content related to Husky Connect (organizations, events, safety info, etc.)
  useEffect(() => {
    // Sample data for Husky Connect
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

    setUsers(fetchedUsers);
  }, []); // Empty dependency array to fetch content once on component mount

  // Swipe left and swipe right handlers
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

  // Map users to UserCard components
  const userCards = users.map((user, index) => (
    <UserCard
      key={user.name}
      {...user}
      onSwipeLeft={() => handleSwipeLeft(index)}
      onSwipeRight={() => handleSwipeRight(index)}
    />
  ));

  return (
    <div className="container">
      <div className="row">
        {userCards}
      </div>
    </div>
  );
};

export default Users;
