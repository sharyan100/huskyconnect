import React, { useState } from 'react';

const FlagPopup = ({ onClose, onFlag }) => {
  const [reason, setReason] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = () => {
    onFlag(reason);
    onClose();
  };

  return (
    <div className="popup">
      <h2>Flag User</h2>
      <textarea value={reason} onChange={handleReasonChange} placeholder="Enter reason for flagging..." />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FlagPopup;
