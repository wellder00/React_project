import React from 'react';

import ButtonFunc from './ButtonFunc';
import HeaderPopap from './HeaderPopap';

function But() {
  return (   
    <div className="header">
      <div className="header-container _container">
        <a href="#!" className="logo header__logo">
          <img src="/assets/icons/1.svg" alt="Logo" />
        </a>
        <nav className="header__nav">
          <ul className="header__menu-list">
            <li>
              <a href="#!">Про нас <div className='header-symbol'></div> </a>
              <HeaderPopap className = 'popap-about-us' items = {['Мета та історія', 'Команда та партнери', 'Документація та звітність']}/>
            </li>
            <li>
              <a href="#!">Проєкти</a>              
            </li>
            <li>
              <a href="#!">Контакти</a>
            </li>
            <li>
              <a href="#!">УКР</a>
            </li>
          </ul>
        </nav>
        <ButtonFunc class="header-button">Допомогти</ButtonFunc>
      </div>
    </div>
  );
}

export default But;
