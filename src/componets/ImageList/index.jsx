import React from 'react';
import ImageCard from '../ImageCard';
import './style.css'

const ImageList = ({images}) => {
    const imgs = images.map((image) => (
        <ImageCard key={image.id} image={image} />
    ))
    return (
        <div className="image-list" >
           {imgs} 
        </div>
    )
};

export default ImageList;

// {images.map((image) => (
//     <img 
//     alt={image.alt_description}
//     src={image.urls.regular} 
//     ></img>
// ))}