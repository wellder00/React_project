import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider() {
  return (
    <div className="successful-popap-swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        pagination={true}
        navigation={{
          nextEl: '.successful-button-next-slide',
          prevEl: '.successful-button-prev-slide',
        }}
        spaceBetween={40}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="successful-popap-swiper__card-block">
            <img src="/assets/image/1.jpg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="successful-popap-swiper__card-block">
            <img src="/assets/image/cur4.jpg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="successful-popap-swiper__card-block">
            <img src="/assets/image/cur2.jpg" alt="1" />
          </div>
        </SwiperSlide>
        <div className="popup-button-block">
          <div className="successful-button-prev-slide">
            <img src="/assets/icons/arrowLeft.svg" alt="" />
          </div>
          <div className="successful-button-next-slide">
            <img src="/assets/icons/arrowRight.svg" alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
