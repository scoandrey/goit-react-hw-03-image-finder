import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className="ImageGalleryItem-image">
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
