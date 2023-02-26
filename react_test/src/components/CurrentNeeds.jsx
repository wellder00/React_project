import React from 'react';
import { useState } from 'react';
import ButtonFunc from './ButtonFunc';
import CurrentNeedsPopap from './CurrentNeedsPopap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function CurrentNeeds() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const setModalState = (state, index) => {
    setModalOpen(state);    
    setSelectedItemIndex(index);
  };
 
  const stories = [
    {
      src: '/assets/image/cur1.jpg',
      id: 230,
      title: 'Ремонт приміщення волонтерського штабу після пожежі',
      sum: '20 000 грн',
      description: `Приміщення наразі не має опалення та електричної проводки, пошкоджені внутрішні перегородки - це дуже ускладнює роботу штабу та дитячого центру. `,
      longDesc: `Перед нами стоїть дуже важливе питання ремонту, бо це приміщення не тільки працює як пункт прийому та видачі гуманітарної допомоги, але і як облаштований дитячий центр, у якому проходять заняття для малечі. У нашому приміщенні зараз немає опалення та електричної проводки, пошкодженні внутрішні перегородки. Якщо ми не відремонтуємо ці жахливі наслідки пожежі, то не зможемо працювати.`,
    },
    {
      src: '/assets/image/cur2.jpg',
      id: 231,
      title: 'Допомога дорослим і дітям деокупованих сіл',
      sum: '80 000 грн',
      description: `Закупівля продуктів та пального для надання гуманітарної допомоги дітям деокупованих сіл Куп ́янського та Ізюмського районів.`,
      longDesc: `Закупівля продуктів, смаколиків та пального для надання гуманітарної допомоги мешканцям сіл Харківської області.`,
    },
    {
      src: '/assets/image/cur3.jpg',
      id: 232,
      title: 'Ремонт транспорту, що розвозить гуманітарну допомогу',
      sum: '13 500 грн',
      description: `Закупівля необхідних автозапчастин для транспорту, який ренулярно розвозить допомогу у Харкові та в селища Харківської області.`,
      longDesc: `Сьогодні ми потребуємо допомоги для оплати ремонту автомобіля, який потрапив у аварію під час надання гуманітарної допомоги. Нашими зусиллями була зроблена закупівля необхідних автозапчастин. Автівку було швидко відремонтовано і вона вже в роботі. Але борг за ремонт складає 13 500 грн.`,
    },
    {
      src: '/assets/image/cur4.jpg',
      id: 233,
      title: 'Збір на придбання товарів для тварин, які втратили дім через війну',
      sum: '45 000 грн',
      description: `Ми закуповуємо засоби догляду за тваринами, корм та вітаміни. Ми відвеземо ці речі у притулки, які організували небайдужі люди.`,
      longDesc: `Ми закуповємо приладдя за доглядом, корма та вітаміни. Все, що потрібно собакам для їх щасливого життя. Ми хочемо зібрати якомога більше речей та скоріше відвезти у цей притулок.`,
    },
  ];
  return (
    <div className="currentNeeds">
      <div className="currentNeeds-wrapper _container">
        <h2>Поточні потреби</h2>
        <span>Зараз для нас є важливим закриття {'\n'} 4 найважливіших потреб:</span>
        <div className="card-block">
          {stories.map((item, index) => {
            return (
              <div className="card-block__content currentNeeds__hover" key={item.id}>
                <div onClick={() => setModalState(true, index)}>
                  <div className="card-block__wrap-img">
                    <img src={item.src} alt="foto" />
                  </div>
                  <div className="card-block__wrap-content">
                    <div className="card-block__title">{item.title}</div>
                    <div className="card-block__price">{item.sum}</div>
                    <div className="card-block__description">{item.description}</div>
                  </div>
                </div>
               
                <HashLink smooth to="/#donate">
                <ButtonFunc class="card-block__buttons">Допомогти</ButtonFunc>
                </HashLink>
              </div>
            );
          })}
        </div>

        <div className="button-single-block">
        <Link to = '/CurrentNeedsPage'>
          <ButtonFunc class="card-block__singl-button">
            Всі поточні потреби
            <img className="card-block__singl-button-arrow" src="/assets/icons/3.svg" alt="arrow" />
          </ButtonFunc>
          </Link>
          <CurrentNeedsPopap
            selectedItem={stories[selectedItemIndex]}
            isModalOpen={isModalOpen}
            setModalState={setModalState}                       
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentNeeds;
