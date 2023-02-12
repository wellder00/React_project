import React from 'react';

import ButtonFunc from './ButtonFunc';
import CurrentSwiper from './CurrentSwiper';

function But() {
  return (
    <div className="successful-stories">
      <div className="successful-stories-wrapper _container">
        <h2>Успішні історії</h2>
        <p>Зараз для нас є важливим закриття 4 найважливіших потреб:</p>
        <div className="card-block-stories-wrapper">
          <div className="card-block-stories">
            <div className='card-block-stories-img'>
              <CurrentSwiper/>
            </div>
            <h4>Подарунки до дітей на новорічні свята</h4>
            <span>
              Наш фонд зібрав подарунки до новорічних свят для дітей - солодощі із Польщі та
              Німеччини, канцтовари,іграшки з різних міст України.
            </span>
            <section>Nov 22, 2022</section>
          </div>
          <div className="card-block-stories">
            <div>
              <img src="/assets/image/story1.jpg" alt="card" />
            </div>
            <h4>Видачу корму для родин, що прихистили безпритульних тварин</h4>
            <span>
              Ми регулярно закуповуємо корм і віддаємо його родинам, які дали прихисток
              безпритульним тваринам.
            </span>
            <section>Nov 22, 2022</section>
          </div>
          <div className="card-block-stories">
            <div>
              <img src="/assets/image/story1.jpg" alt="card" />
            </div>
            <h4>Допомога малобільним людям</h4>
            <span>
              Наш команда разом із ГО “Фенікс” придбали ходунки для Тамари - літньої мешканки міста
              Куп’янську. Це місто та його жителі дуже постраждали внаслідок російської військової
              агресії.
            </span>
            <section>Nov 22, 2022</section>
          </div>
        </div>
        <div className="button-single-story">
           <ButtonFunc class="card-block__singl-button">Всі успішні історії<img className='card-block__singl-button-arrow' src="/assets/icons/3.svg" alt="arrow" /></ButtonFunc>
        </div>
      </div>
    </div>
  );
}

export default But;
