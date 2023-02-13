import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider() {
  return (    
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      pagination={false}
      navigation={{
        nextEl:'.button-next-slide',
        prevEl:'.button-prev-slide',
      }}      
      spaceBetween={40}
      slidesPerView={1.3}
          >
      <SwiperSlide>      
          <div className="swiper-image-block">
        <img className='swiper-img' src="/assets/image/1.jpg" alt="1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-image-block">
        <img className='swiper-img swiper-img2' src="/assets/image/cur4.jpg" alt="1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-image-block">
        <img className='swiper-img' src="/assets/image/cur2.jpg" alt="1" />
        </div>
      </SwiperSlide>     
      <div className="button-next-slide"><img src="/assets/icons/3.svg" alt="arrow" /></div>
    </Swiper>
  );
}

export default Slider;
