import React from 'react'
import mobile from '../../Images/mobile.png'
import mobile1 from '../../Images/mobile1.png'
import mobile2 from '../../Images/mobile2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductGallery = () => {


  return (
    <div>

    <Swiper navigation={true} modules={[Navigation]}  loop={true} className="mySwiper swipper-gallery">
        <SwiperSlide><img  src={mobile} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={mobile1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={mobile2} alt="" /></SwiperSlide>
      </Swiper>

    </div>
  )
}

export default ProductGallery