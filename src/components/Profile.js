import React, { useState } from 'react';

function Profile({ onCreatePost }) {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [createdPosts, setCreatedPosts] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    const newPost = {
      name,
      major,
      content,
      description,
      image,
    };

    setCreatedPosts([...createdPosts, newPost]);

    onCreatePost(newPost);
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleCreatePost}>
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major" value={major} onChange={handleMajorChange} />
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

      <div>
        <h2>Created Posts</h2>
        {createdPosts.map((post, index) => (
          <div key={index} className="created-post">
            <p>Title: {post.name}</p>
            <p>Major: {post.major}</p>
            <p>Content: {post.content}</p>
            <p>Description: {post.description}</p>
            {post.image && (
              <div>
                <img src={URL.createObjectURL(post.image)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;