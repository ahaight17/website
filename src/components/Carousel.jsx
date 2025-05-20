import { Swiper, SwiperSlide } from 'swiper/react';
import "../components/aesthetic/aesthetic.css"

import 'swiper/css';
import { CDN_URL } from '../utils/contants';

export default function Carousel() {
    return (
        <div className="content-page center flex-container-row">
          <img className='landscape-img' src={`${CDN_URL}/home/joshua_tree.jpg`}/>
        </div>
    )
    // return (
    //     <Swiper
    //         spaceBetween={50}
    //         slidesPerView={3}
    //         onSlideChange={() => console.log('slide change')}
    //         onSwiper={(swiper) => console.log(swiper)}
    //     >
    //         <SwiperSlide>Slide 1</SwiperSlide>
    //         <SwiperSlide>Slide 2</SwiperSlide>
    //     </Swiper>
    // );
}