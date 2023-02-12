import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
function CurrentSwiper() {
  return (
    <div className="current-swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        pagination={true}
        navigation={{
          nextEl: '.current-swiper__button-next-slide',
          prevEl: '.current-swiper__button-prev-slide',
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="current-swiper__rard-block">
            <img src="/assets/image/1.jpg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="current-swiper__rard-block">
            <img src="/assets/image/cur4.jpg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='last-block'>
          <div className="current-swiper__rard-block">
            <img src="/assets/image/cur2.jpg" alt="1" />
          </div>
        </SwiperSlide>
        <div className="current-swiper__button-next-slide-block">
          <div className="current-swiper__button-prev-slide">
            <img src="/assets/icons/arrowLeft.svg" alt="" />
          </div>
          <div className="current-swiper__button-next-slide">
            <img src="/assets/icons/arrowRight.svg" alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default CurrentSwiper;
