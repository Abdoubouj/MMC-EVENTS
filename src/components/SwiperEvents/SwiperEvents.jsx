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
import { events } from '../../data/events';
const SwiperEvents = () => {
  return (
    <>
    <Swiper
      // centeredSlides={true}
      // effect={'fade'}
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
     {events.map((event)=>(
       <SwiperSlide style={{height:"70vh"}}>
        <img src={event?.image} style={{objectFit:"contain",height:"100%",width:"100%"}} alt="#" />
      </SwiperSlide>
        ))}
    </Swiper>
  </>
  )
}

export default SwiperEvents