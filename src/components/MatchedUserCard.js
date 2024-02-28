import React from 'react';

function MatchedUserCard({ user, onUnmatch, onChat }) {
  const handleUnmatchClick = () => {
    onUnmatch(user.name);
  };

  return (
    <div className="card">
      <img className="card-img-top" src={user.img} alt={user.name} />
      <div className="card-body">
        <h3 className="card-title">{user.name}</h3>
        <p>Major: {user.major}</p>
        <p>Content: {user.content}</p>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onClick={handleUnmatchClick}>Unmatch</button>
          <button type="submit" className="btn btn-primary" onClick={onChat}>Chat</button>
        </div>
      </div>
    </div>
  );
}
  
export default MatchedUserCard;
