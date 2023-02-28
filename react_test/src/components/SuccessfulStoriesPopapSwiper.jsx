import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider({img}) {
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
        {img.map((item, index) => {
            return (
          <SwiperSlide key={`${item}_${index}`}>
          <div className="successful-popap-swiper__card-block">            
            <img src={item.src} alt={item.src} />
          </div>
         </SwiperSlide>
            
            );
          })}
   
        <div className="popup-button-block">
          <div className="successful-button-prev-slide">
            <img src="/assets/icons/arrowLeft.svg" alt="1" />
          </div>
          <div className="successful-button-next-slide">
            <img src="/assets/icons/arrowRight.svg" alt="1" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
