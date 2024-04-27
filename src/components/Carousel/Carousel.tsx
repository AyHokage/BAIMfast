// Carousel.tsx

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from './Carousel.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft as caretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight as caretRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Banner/Banner';

interface Props {
  images: [][]
}

const Carousel = ({imagesArr}: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(true)

  const handleAnimate = () => {
    setAnimate(prev => !prev)
  }

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagesArr.length - 1 ? 0 : prevIndex + 1));
    handleAnimate()
    console.log(animate)
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesArr.length - 1 : prevIndex - 1));
    handleAnimate()
    console.log(animate)
  };
  


  return ( 
    
      <div className={styles.carouselImages}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}><FontAwesomeIcon style={{fontSize: '1rem'}} className="fa-solid fa-caret-left" icon={caretLeft} /></button>
        {/* <Image className={styles.carouselImage} width={500} height={300} alt={`Slide ${currentImageIndex + 1}`} src={images[currentImageIndex]} /> */}
        <Banner animate={animate} images={imagesArr[currentImageIndex]}  /> 
        <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}><FontAwesomeIcon style={{fontSize: '1rem'}} className="fa-solid fa-caret-right" icon={caretRight} /></button>
      </div>
    
  );
};

export default Carousel;
