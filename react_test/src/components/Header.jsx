import React from 'react';

import ButtonFunc from './ButtonFunc';
import Headerpopup from './HeaderPopup';

function But() {
  const[visivlePopup1, setvisivlePopup1] = React.useState(false);
  const[visivlePopup2, setvisivlePopup2] = React.useState(false);
  const[visivlePopup3, setvisivlePopup3] = React.useState(false);

  const sortRef1 = React.useRef();

  const toggleVisiblePopup1 = () => {
     setvisivlePopup1(!visivlePopup1)
  }
  const togglevisivlePopup2 = () => {
    setvisivlePopup2(!visivlePopup2)
 }

 const togglevisivlePopup3 = () => {
  setvisivlePopup3(!visivlePopup3)
}

const handleOutsideClick1 = (e) => {
  let path = e.path || (e.composedPath && e.composedPath());
  if (!path.includes(sortRef1.current)){
    setvisivlePopup1(false)
    
  }
}

React.useEffect(() => {
  document.body.addEventListener('click', handleOutsideClick1)
}, [])


  return (   
    <div className="header">
      <div className="header-container _container">
        <a href="#!" className="logo header__logo">
          <img src="/assets/icons/1.svg" alt="Logo" />
        </a>
        <nav className="header__nav">
          <ul className="header__menu-list">
            <li ref={sortRef1} onClick={toggleVisiblePopup1}>
              <a href="#!">Про нас <div className='header-symbol'></div> </a>
              {visivlePopup1 && (<Headerpopup className = 'popup-about-us' items = {['Мета та історія', 'Команда та партнери', 'Документація та звітність']}/>)}
            </li>
            <li onClick={togglevisivlePopup2}>
              <a href="#!">Проєкти<div className='header-symbol'></div> </a> 
              {visivlePopup2 &&(<Headerpopup className = 'popup-about-us' items = {['Поточні', 'Успішні історії']}/>)}            
            </li>
            <li>
              <a href="#!">Контакти<div className='header-symbol'></div> </a>
            </li>
            <li onClick={togglevisivlePopup3}>
              <a href="#!">УКР<div className='header-symbol'></div> </a>
              {visivlePopup3 &&(<Headerpopup className = 'popup-about-us' items = {['Українська', 'English' ]}/>)}
            </li>
          </ul>
        </nav>
        <ButtonFunc class="header-button">Допомогти</ButtonFunc>
      </div>
    </div>
  );
}

export default But;
