// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImageUrl(data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
