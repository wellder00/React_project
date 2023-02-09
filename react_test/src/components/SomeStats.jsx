import React from 'react';

import ButtonFunc from './ButtonFunc';

function But() {
  return (
    <div className="some-stats">
      <div className="some-stats_wrapper _container">
        <div className="header-block">
          <div className="header-block__header">Наша допомога у цифрах</div>
        </div>
        <div className="image-block">
          <div className="image-block__line-image">
            <img src="/assets/icons/stats_line.svg" alt="decore-img"></img>
          </div>
          <div className="image-block__frame1">
            <div className="image-block__frame1__text">
              <div className="image-block__frame1__text__header">24 лютого 2022</div>
              <div className="image-block__frame1__text__description">Початок війни</div>
            </div>
            <div className="image-block__frame1__image">
              <img src="/assets/image/stats1.png" alt="decore-img"></img>
            </div>
          </div>
          <div className="image-block__frame2">
            <div className="image-block__frame2__text">
              <div className="image-block__frame2__text__header"> З того часу ми постійно</div>
              <div className="image-block__frame2__text__description"> допомагаємо</div>
            </div>
            <div className="image-block__frame2__image">
              <img src="/assets/image/stats2.png" alt="decore-img"></img>
            </div>
          </div>
          <div className="image-block__frame3"> За цей час було видано</div>
          <div className="image-block__frame4">
            <div className="image-block__frame4__text">
              <div className="image-block__frame4__text__header">26 230</div>
              <div className="image-block__frame4__text__description">продовольчих наборів</div>
            </div>
            <div className="image-block__frame4__image">
              <img src="/assets/icons/stats_frame4.svg" alt="decore-img"></img>
            </div>
          </div>
          <div className="image-block__frame5">
            <div className="image-block__frame5__text">
              <div className="image-block__frame5__text__header">9 800</div>
              <div className="image-block__frame5__text__description">гігієнічних наборів</div>
            </div>
            <div className="image-block__frame5__image">
              <img src="/assets/icons/stats_frame5.svg" alt="decore-img"></img>
            </div>
          </div>
          <div className="image-block__frame6">
            <div className="image-block__frame6__text">
              <div className="image-block__frame6__text__header">9 700</div>
              <div className="image-block__frame6__text__description">
                упаковок підгузків для дітей та дорослих
              </div>
            </div>
            <div className="image-block__frame6__image">
              <img src="/assets/icons/stats_frame6.svg" alt="decore-img"></img>
            </div>
          </div>
          <div className="image-block__frame7">
            <div className="image-block__frame7__text">
              <div className="image-block__frame7__text__header">29 360</div>
              <div className="image-block__frame7__text__description">Гарячих обідів</div>
            </div>
            <div className="image-block__frame7__image">
              <img src="/assets/icons/stats_frame7.svg" alt="decore-img"></img>
            </div>
          </div>
          <div className="image-block__frame8">А також отримали допомогу</div>
          <div className="image-block__frame9">
            <div className="image-block__frame9__image">
              <img src="/assets/icons/stats_frame9.svg" alt="decore-img"></img>
            </div>
            <div className="image-block__frame9__text">
              <div className="image-block__frame9__text__header">208</div>
              <div className="image-block__frame9__text__description">
                дітей за програмами соціально-психологічної підтримки
              </div>
            </div>
          </div>
        </div>
        <div className="button-single-block-card">
           <ButtonFunc class="card-block__singl-button">Всі успішні історії<img className='card-block__singl-button-arrow' src="/assets/icons/3.svg" alt="arrow" /></ButtonFunc>
        </div>
       </div>       
    </div>
  );
}

export default But;
