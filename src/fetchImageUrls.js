import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'path/to/your/images'); // Replace with your image folder path
      const result = await listAll(storageRef);
      const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));
      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`img-${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
import ImageGallery from '../ImageGallery';
