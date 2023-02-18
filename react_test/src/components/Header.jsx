import React from 'react';
import { Link } from 'react-router-dom';

import ButtonFunc from './ButtonFunc';
import Headerpopup from './HeaderPopup';

function But() {
  const [visiblePopup1, setvisiblePopup1] = React.useState(false);
  const [visiblePopup2, setvisiblePopup2] = React.useState(false);
  const [visiblePopup3, setvisiblePopup3] = React.useState(false);
    const sortRef1 = React.useRef();
    const sortRef2 = React.useRef();
    const sortRef3 = React.useRef();

  
  const togglevisiblePopup1 = () => {
    setvisiblePopup1(!visiblePopup1);
  };
  const togglevisiblePopup2 = () => {
    setvisiblePopup2(!visiblePopup2);
  };
  const togglevisiblePopup3 = () => {
    setvisiblePopup3(!visiblePopup3);
  };

  const handleOutsiteClick1 = (e) => {
      let path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(sortRef1.current)) {
        setvisiblePopup1(false)
      }
  }
  const handleOutsiteClick2 = (e) => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef2.current)) {
      setvisiblePopup2(false)
    }
}
const handleOutsiteClick3 = (e) => {
  let path = e.path || (e.composedPath && e.composedPath());
  if (!path.includes(sortRef3.current)) {
    setvisiblePopup3(false)
  }
}

  React.useEffect(() => {
   document.body.addEventListener('click', handleOutsiteClick1)
  }, [])
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsiteClick2)
   }, [])
   React.useEffect(() => {
    document.body.addEventListener('click', handleOutsiteClick3)
   }, [])
  

  return (
    <div className="header">
      <div className="header-container _container">
      <Link to = '/'>
        <a href="#!" className="logo header__logo">
          <img src="/assets/icons/1.svg" alt="Logo" />
        </a>
        </Link>
        <nav className="header__nav">
          <ul className="header__menu-list">
            <li className='header__nav-hover' ref={sortRef1}>
              <a onClick={togglevisiblePopup1} href="#!">
                Про нас <div className={visiblePopup1 ? 'rotade' : 'header-symbol'}></div>
              </a>
              {visiblePopup1 && (
                <Headerpopup
                  className="popup-about-us"
                  items={['Мета та історія', 'Команда та партнери', 'Документація та звітність']}
                />
              )}
            </li>

            <li className='header__nav-hover' ref={sortRef2}>
              <a onClick={togglevisiblePopup2} href="#!">
                Проєкти<div className={visiblePopup2 ? 'rotade' : 'header-symbol'}></div>
              </a>
              {visiblePopup2 && (
                <Headerpopup className="popup-about-us" items={['Поточні', 'Успішні історії']} />
              )}
            </li>
            <li className='header__nav-hover'>
              <a href="#!">
                Контакти
              </a>
            </li>
            <li className='header__nav-hover' ref={sortRef3}>
              <a onClick={togglevisiblePopup3} href="#!">
                УКР<div className={visiblePopup3 ? 'rotade' : 'header-symbol'}></div>
              </a >
              {visiblePopup3 && (
                <Headerpopup className="popup-about-us" items={['Українська', 'English']} />
              )}
            </li>
          </ul>
        </nav>
        <a href="#button_help">
        <ButtonFunc class="header-button">Допомогти</ButtonFunc>
        </a>
      </div>
    </div>
  );
}

export default But;
