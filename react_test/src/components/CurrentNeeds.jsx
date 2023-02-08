import React from 'react';

import ButtonFunc from './ButtonFunc';

function But() {
  return (
    <div className="currentNeeds">
      <div className="currentNeeds-wrapper _container">
        <h2>Поточні потреби</h2>
        <span>Зараз для нас є важливим закриття {'\n'} 4 найважливіших потреб:</span>
        <div className="card-block">
          <div className="card-block__content">
            <div className="card-block__wrap-img">
            <img src="/assets/image/cur1.jpg" alt="foto"/>
            </div>
            <div className="card-block__wrap-content">
            <div className="card-block__title">Ремонт приміщення волонтерського штабу після пожежі</div>
            <div className="card-block__price">62 667 UAH</div>
            <div className="card-block__description">Приміщення  зараз не має вікон, там зруйновані стіни - це унеможливлює роботу штабу та дитячого центру.</div>
            </div>
            <ButtonFunc class="card-block__buttons">Допомогти</ButtonFunc>
          </div>
          <div className="card-block__content">
          <div className="card-block__wrap-img">
            <img src="/assets/image/cur2.jpg" alt="foto"/>
            </div>
            <div className="card-block__wrap-content">
            <div className="card-block__title">Допомога дорослим і дітям деокупованих сіл Куп´янського району</div>
            <div className="card-block__price">62 667 UAH</div>
            <div className="card-block__description">Закупівля продуктів та пального для надання гуманітарної допомоги.</div>
            </div>
            <ButtonFunc class="card-block__buttons">Допомогти</ButtonFunc>
          </div>
          <div className="card-block__content">
          <div className="card-block__wrap-img">
            <img src="/assets/image/cur3.jpg" alt="foto"/>
            </div>
            <div className="card-block__wrap-content">
            <div className="card-block__title">Ремонт транспорту, що розвозить гуманітарну допомогу</div>
            <div className="card-block__price">7 500 UAH</div>
            <div className="card-block__description">Закупівля необхідних автозапчастин для транспорту,  який  щоденно розвозить допомогу у Харків та селища Харківської області.</div>
            </div>
            <ButtonFunc class="card-block__buttons">Допомогти</ButtonFunc>
          </div>
          <div className="card-block__content">
          <div className="card-block__wrap-img">
            <img src="/assets/image/cur4.jpg" alt="foto"/>
            </div>
            <div className="card-block__wrap-content">
            <div className="card-block__title">Збір на покупку товарів для тварин, що втратили дім через війну </div>
            <div className="card-block__price">62 667 UAH</div>
            <div className="card-block__description">Ми закуповємо приладдя за доглядом, корма та вітаміни. Все, що потрібно собакам для їх щасливого життя. </div>
            </div>
            <ButtonFunc class="card-block__buttons">Допомогти</ButtonFunc>
          </div>          
        </div>
        <div className="button-single-block">
        <ButtonFunc class="card-block__singl-button">Всі поточні потреби<img className='card-block__singl-button-arrow' src="/assets/icons/3.svg" alt="arrow" /></ButtonFunc>
        </div>
      </div>
    </div>
  );
}

export default But;
