import React, { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Galeria = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const images = photos.map(photo => ({
    original: photo.original,
    thumbnail: photo.thumbnail
  }));

  return (
    <div className="photo-gallery" id='Galeria'>
      <h1 className='titulo2'>Nuestro Trabajo</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-thumbnail mi-seccion4"
            onClick={() => openPhoto(index)}
          >
            <img src={photo.original} className='fotito' alt={`Eluney eventos ${index}`} />
          </div>
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <div className="photo-modal">
          
          <ReactImageGallery items={images} 
          startIndex={selectedPhotoIndex}
          showIndex={true}
          
          
          
          />
          <p onClick={closePhoto} className='btn-cerrar'>X</p>
        </div>
      )}
    </div>
  );
};

export default Galeria;
