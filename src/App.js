import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadedPhotos = JSON.parse(localStorage.getItem('photos'));
    if (loadedPhotos) {
      setPhotos(loadedPhotos);
    }
  }, []);

  const handleClick = () => {
    // You can replace this with a real API call or array to fetch images and their names
    const newPhotos = [
      { id: getRandomId(1000), url: 'img/kadenyuk.png', name: 'Каденюк Леонід Костянтинович' },
	  { id: getRandomId(1000), url: 'img/chelomnei.png', name: 'Челомей Володимир Миколайович' },
	  { id: getRandomId(1000), url: 'img/iangel.png', name: 'Михайло Кузьмич Янгель' },
	  { id: getRandomId(1000), url: 'img/koroliov.png', name: 'Корольов Сергій Павлович' },
	  { id: getRandomId(1000), url: 'img/losino-losynskyi.png', name: 'Гліб Євгенович Лозіно-Лозінський' },
	  { id: getRandomId(1000), url: 'img/kondratiuk.png', name: 'Кондратюк Юрій Васильович' },
    ];

    const updatedPhotos = [...photos, ...newPhotos];
    setPhotos(updatedPhotos);
    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
  };

  const handleDelete = (id) => {
	  console.log(photos);
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Завантажити фотографії</button>
      <div className="photos">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
			<img src={photo.url} alt={photo.name} />
            <p>{photo.name}</p>
            <button onClick={() => handleDelete(photo.id)}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function getRandomId(max) {
  return Math.floor(Math.random() * max);
}

export default App;