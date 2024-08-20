// AdminPanel.js

import React, { useState } from 'react';

const AdminPanel = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onImageUpload(selectedFile);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default AdminPanel;