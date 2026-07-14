import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import swipper1 from "../../Images/slider1.png";
import swipper2 from "../../Images/prod3.png";
import swipper3 from "../../Images/prod4.png";
import swipper4 from "../../Images/slider4.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="slider-background d-flex justify-content-center align-items-center gap-3">
          <img className="swipper-image" src={swipper1} alt="" />
          <div>
            <p className="slider-title">هناك خصم كبير</p>
            <p className="slider-text"> خصم يصل 50% عند شرائك</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-background2 d-flex justify-content-center align-items-center gap-3">
          <img className="swipper-image " src={swipper2} alt="" />
          <div>
            <p className="slider-title">هناك خصم كبير</p>
            <p className="slider-text"> خصم يصل 50% عند شرائك</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-background3 d-flex justify-content-center align-items-center gap-3">
          <img className="swipper-image " src={swipper3} alt="" />
          <div>
            <p className="slider-title">هناك خصم كبير</p>
            <p className="slider-text"> خصم يصل 50% عند شرائك</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-background4 d-flex justify-content-center align-items-center gap-3">
          <img className="swipper-image " src={swipper4} alt="" />
          <div>
            <p className="slider-title">هناك خصم كبير</p>
            <p className="slider-text"> خصم يصل 50% عند شرائك</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
