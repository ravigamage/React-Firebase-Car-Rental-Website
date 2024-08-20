import React, { useState } from 'react';
import "../styles/car-item.css"

const Adpanel = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <input type="file" multiple onChange={handleImageUpload} />
      <div className="preview-section">
        {images.map((image, index) => (
          <div key={index} className="image-preview">
            <img
              src={URL.createObjectURL(image)}
               // Corrected line
              alt={`Preview ${index}`}
              
              className="preview-image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adpanel;