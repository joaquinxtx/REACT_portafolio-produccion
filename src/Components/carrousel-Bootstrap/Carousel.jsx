import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import img from './img/Captura-de-pantalla1.png'
import img2 from './img/snake-img.png'
import img3 from './img/techo.png'

export const Carrousel = ()=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div className='carouselContainer' data-aos="zoom-out-left">

        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100 imgCarousel"
            src={img}
            alt="First slide"
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 imgCarousel"
            src={img2}
            alt="Second slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 imgCarousel"
            src={img3}
            alt="Third slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
    </div>
  );
}
