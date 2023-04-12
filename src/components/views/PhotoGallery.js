import React from 'react';
import img from '../../assets/images/separator.png'
import gallery1 from '../../assets/images/gallery_1.jpg'
import gallery2 from '../../assets/images/gallery_2.jpg'
import gallery3 from '../../assets/images/gallery_3.jpg'
import gallery4 from '../../assets/images/gallery_4.jpg'
import gallery5 from '../../assets/images/gallery_5.jpg'
import gallery6 from '../../assets/images/gallery_6.jpg'
import gallery7 from '../../assets/images/gallery_7.jpg'
import gallery8 from '../../assets/images/gallery_8.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/swiper-bundle.min.css'
// import "swiper/components/pagination/pagination.min.css"

import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
const PhotoGallery = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto px-12 py-10 pb-16'>
         <div className='items-center text-center'>
            <h1 className="mb-5 text-4xl font-medium tracking-wide mt-16">PHOTO GALLERY</h1>
            <img className='mx-auto' src={img} alt='' />
            <h4 className="mb-5 text-xl font-normal tracking-wide ">Campaign photos of different parts of world and our prestigious voluntary work</h4>
        </div>
        <Swiper 
        slidesPerView={4} 
        slidesPerColumn={2} 
        spaceBetween={30} 
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{"clickable": true}} 
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-16 pt-16"
        
        >
  <SwiperSlide><img src={gallery1} alt='' /></SwiperSlide><SwiperSlide><img src={gallery2} alt='' /></SwiperSlide><SwiperSlide><img src={gallery3} alt='' /></SwiperSlide><SwiperSlide><img src={gallery4} alt='' /></SwiperSlide><SwiperSlide><img src={gallery5} alt='' /></SwiperSlide><SwiperSlide><img src={gallery6} alt='' /></SwiperSlide><SwiperSlide><img src={gallery7} alt='' /></SwiperSlide><SwiperSlide><img src={gallery8} alt='' /></SwiperSlide>
 
  </Swiper>
        </div>
        </div>
    );
};

export default PhotoGallery;