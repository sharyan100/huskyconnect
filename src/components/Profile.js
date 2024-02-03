// Profile.js
import React, { useState } from 'react';

function Profile({ onCreatePost }) {
  const [name, setName] = useState('Alexa');
  const [major, setMajor] = useState('Nursing');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    // Access the uploaded file
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    const newPost = {
      name,
      major,
      title,
      content,
      description,
      image,
    };
    // Pass the new post to the parent component
    onCreatePost(newPost);
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleCreatePost}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major" value={major} onChange={handleMajorChange} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <input type="text" id="content" name="content" value={content} onChange={handleContentChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
