import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import {EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
const SwiperEvents = () => {
  return (
    <>
    <Swiper
      // centeredSlides={true}
      effect={'zoomIn'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade ,Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide style={{height:"70vh"}}>
        <img src="microsoft.jpg" alt="#" style={{objectFit:"cover",height:"100%",width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide style={{height:"70vh"}}>
        <img src="microsoft.jpg" alt="#" style={{objectFit:"cover",height:"100%",width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide style={{height:"70vh"}}>
        <img src="microsoft.jpg" style={{objectFit:"cover",height:"100%",width:"100%"}} alt="#" />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default SwiperEvents