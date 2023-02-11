import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider(props) {
  return (
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      pagination={false}
      navigation={true}      
      spaceBetween={40}
      slidesPerView={1.25}
      
    >
      <SwiperSlide>
        <img className='swiper-img' src="/assets/image/1.jpg" alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='swiper-img swiper-img2' src="/assets/image/cur4.jpg" alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='swiper-img' src="/assets/image/cur2.jpg" alt="1" />
      </SwiperSlide>
      
      
    </Swiper>
  );
}

export default Slider;
