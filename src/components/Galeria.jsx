import React, { useState } from 'react';

const Galeria = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery" id='Galeria'>
        <h1 className='titulo2'>Galería</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-thumbnail"
            onClick={() => openPhoto(photo)}
          >
            <img src={photo} className='fotito' alt={`Photo ${index}` } />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-modal" onClick={closePhoto}>
          <img src={selectedPhoto} alt="Selected Photo" />
        </div>
      )}
    </div>
  );
};

export default Galeria;
