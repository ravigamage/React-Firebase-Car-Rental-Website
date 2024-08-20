import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import carData from './carData';

const CarManager = () => {
  const [cars, setCars] = useState(carData);

  const handleImageUpload = (file) => {
    // Simulate storing the file and getting a URL
    const newCar = {
      id: cars.length + 1,
      brand: 'New Brand', // Add relevant details
      carName: 'New Car Name',
      imgUrl: URL.createObjectURL(file),
      model: 'New Model',
      price: 100,
      speed: '25kmpl',
      gps: 'GPS Navigation',
      seatType: 'Heated seats',
      automatic: 'Automatic',
      description: 'Description of the new car.',
    };
    setCars([...cars, newCar]);
  };

  return (
    <div>
      <AdminPanel onImageUpload={handleImageUpload} />
      {/* Displaying the list of cars */}
      {cars.map(car => (
        <div key={car.id}>
          <h3>{car.carName}</h3>
          <img src={car.imgUrl} alt={car.carName} />
          {/* Add more car details here */}
        </div>
      ))}
    </div>
  );
};

export default CarManager;