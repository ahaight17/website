import React, { FunctionComponent } from 'react';
import { CDN_URL } from '../utils/contants';
import Slider from "react-slick";

export const Carousel: FunctionComponent = () => {
    return (
      <div>
        <Slider
          centerMode
          dots
          arrows={false}
          infinite 
          speed={500} 
          slidesToShow={1} 
          slidesToScroll={1}
          autoplay
          swipeToSlide
          autoplaySpeed={7000}
          cssEase="linear"
          className="slider"
        >
          <div className="flex-container-row center">
            <img className="landscape-img" src={`${CDN_URL}/home/fire_station.jpg`}/>
          </div>
          <div className="flex-container-row center">
            <img className="landscape-img" src={`${CDN_URL}/home/joshua_tree.jpg`}/>
          </div>
          <div className="flex-container-row center">
            <img className="landscape-img" src={`${CDN_URL}/home/colonnade.jpg`}/>
          </div>
        </Slider>
      </div>
    );
}