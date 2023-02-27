import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
function CurrentSwiper({index, handleClick}) {
  const imgArr = [
    {src: '/assets/image/cur2(2).jpg'},
    {src: '/assets/image/cur2(3).jpg'},
    {src: '/assets/image/cur2(4).jpg'},
    {src: '/assets/image/cur2(5).jpg'},
    {src: '/assets/image/cur2(6).jpg'},
    {src: '/assets/image/cur2(1).jpg'},
  ];
  
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
        {
          imgArr.map((img, item)=>
            <SwiperSlide key={`${item}_${img}`} onClick={() => handleClick(true, index)}>              
            <div className="current-swiper__card-block">
              <img src={(img.src)} alt="1" />              
            </div>
          </SwiperSlide>
          
          )
        }

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
