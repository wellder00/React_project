import React from 'react';

import ButtonFunc from './ButtonFunc';

function But() {
  return (
    <div className="support">
      <div className="support-wrapper _container">
        <div className="left-block">
          <h2>Ви можете допомогти в будь-який інший спосіб</h2>
          <div>
            <img src="/assets/image/support1.png" alt="food, pills, toys" />
          </div>
          <p>
            Гроші, ліки, дитячі іграшки, корм для тварин. Зараз потреба є у всьому. Тож, якщо у вас
            є можливість допомогти нам не фінансово, а в інший спосіб, то заповніть контактну форму
            праворуч. Будь яка підтримка дуже цінна.
          </p>
        </div>
        <div className="right-block">
          <form>
            <input type="text" placeholder="Ваше ім’я" required/>
            <input type="email" placeholder="Email" required/>
            <input type="tel" placeholder="Номер телефону" required/>
            <textarea name="text"  placeholder="Повідомлення" required></textarea>                      
          </form>
          <input type="checkbox" required/>
          <label className='right-block-check'> Я погоджуюся з політикою конфіденційності</label>  
          <ButtonFunc class='support-button'>Відправити форму</ButtonFunc>          
        </div>
      </div>
    </div>
  );
}

export default But;
