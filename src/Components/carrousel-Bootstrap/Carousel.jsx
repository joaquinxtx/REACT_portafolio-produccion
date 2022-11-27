import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

import {Calendar,TotalCondo,totalCondo2,appGeolocalizacion,ecomerce,journal,regalos,snake,techo,todoList} from './img'

export const Carrousel = ()=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 const dataCarrousel =[
   {id:1 , img:totalCondo2},
   {id:2 , img:ecomerce},
   {id:3 , img:appGeolocalizacion},
   {id:5 , img:regalos},
   {id:4 , img:Calendar},
   {id:6 , img:TotalCondo},
  {id:7 , img:journal},
  {id:8 , img:snake},
  {id:9 , img:techo},
  {id:10 , img:todoList},

  ]

  return (

    <div className='carouselContainer' data-aos="zoom-out-left">

        <Carousel activeIndex={index} onSelect={handleSelect}>

          {
            dataCarrousel?.map(item=>(
            <Carousel.Item key={item.id}>
                <img
                className="d-block w-100 imgCarousel"
                src={item.img}
                alt="First slide"
                />
                
            </Carousel.Item>

            ))
          }
       
        </Carousel>
        
    </div>
  );
}
