import React from 'react';

import ButtonFunc from './ButtonFunc';

function But() {
  return (
    <div className="herro">
      <div className="wrapper-herro _container">
        <div className="content-block">
          <h1>Допоможіть постраждалим від війни</h1>
          <div>
            Війна застала нас у рідному Харкові. Ми на власні очі бачимо страждання та біль людей.
            Тому, ми створили благодійний фонд “A help” і тепер допомогаємо людям.
            <div>Долучайся і ти.</div>
          </div>
         <ButtonFunc class="hero-button">Допомогти <img src="/assets/icons/3.svg" alt="arrow" /></ButtonFunc>
         
        </div>
        <div className="img-block">
          <img src="/assets/image/1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default But;