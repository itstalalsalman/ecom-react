import React, { useState } from 'react';
import './ShoeImages.css';

import img1 from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-1.jpg';
import img1thmb from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-1-thumbnail.jpg';

import img2 from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-2.jpg';
import img2thmb from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-2-thumbnail.jpg';

import img3 from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-3.jpg';
import img3thmb from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-3-thumbnail.jpg';

import img4 from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-4.jpg';
import img4thmb from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-product-4-thumbnail.jpg';


const shoeImages = [
  { 
     id: 1,
     mainImage: img1,
     thumbnailImage: img1thmb, 
     alt: 'Shoe 1' 
  },
  { 
     id: 2, 
     mainImage: img2, 
     thumbnailImage: img2thmb, 
     alt: 'Shoe 2' 
  },
  { 
    id: 3, 
    mainImage: img3, 
    thumbnailImage: img3thmb, 
    alt: 'Shoe 3' 
  },
  { 
    id: 4, 
    mainImage: img4, 
    thumbnailImage: img4thmb, 
    alt: 'Shoe 4' 
  },
  
];

const ShoeImages = () => {
  const [selectedImage, setSelectedImage] = useState(shoeImages[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='shoe-images-container'>
      <div className='main-image-container'>
        <img src={selectedImage.mainImage} alt={selectedImage.alt} className='main-image' />
      </div>
      <ul className='thumbnail-container'>
        {shoeImages.map((image) => (
          <li key={image.id}>
            <img
              src={image.thumbnailImage}
              alt={image.alt}
              className={selectedImage.id === image.id ? 'thumbnail selected' : 'thumbnail'}
              onClick={() => handleThumbnailClick(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoeImages