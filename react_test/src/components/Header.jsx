import React from 'react';
import { Link } from 'react-router-dom';
import ButtonFunc from './ButtonFunc';
import { HashLink } from 'react-router-hash-link';

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
      setvisiblePopup1(false);
    }
  };
  const handleOutsiteClick2 = (e) => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef2.current)) {
      setvisiblePopup2(false);
    }
  };
  const handleOutsiteClick3 = (e) => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef3.current)) {
      setvisiblePopup3(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsiteClick1);
  }, []);
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsiteClick2);
  }, []);
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsiteClick3);
  }, []);

  return (
    <div className="header">
      <div className="header-container _container">
        <HashLink smooth to="/#hero" className="logo header__logo">
          <img src="/assets/icons/1.svg" alt="Logo" />
        </HashLink>

        <nav className="header__nav">
          <ul className="header__menu-list">
            <li onClick={togglevisiblePopup1} className="header__nav" ref={sortRef1}>
              <a className="header__nav-hover" href="#!">
                Про нас <div className={visiblePopup1 ? 'rotade' : 'header-symbol'}></div>
              </a>
              {visiblePopup1 && (
                <div className="popup-about-us">
                  <ul className="popup-ul">
                    <Link to="/OurGoal">
                      <li className="popup-li"> Мета та історія </li>
                    </Link>
                    <Link to="/OurTeams">
                      <li className="popup-li"> Команда та партнери </li>
                    </Link>
                    <Link to="/DocumentPage">
                      <li className="popup-li"> Документація та звітність </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>

            <li onClick={togglevisiblePopup2} className="header__nav" ref={sortRef2}>
              <a className="header__nav-hover" href="#!">
                Проєкти<div className={visiblePopup2 ? 'rotade' : 'header-symbol'}></div>
              </a>
              {visiblePopup2 && (
                <div className="popup-about-us">
                  <ul className="popup-ul">
                    <Link to="/CurrentNeedsPage">
                      <li className="popup-li"> Поточні</li>
                    </Link>
                    <Link to="/SuccessfulStoriesPage">
                      <li className="popup-li"> Успішні історії </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className="header__nav">
              <HashLink to="/Contacts#formTop" className="header__nav-hover">
                Контакти
              </HashLink>
            </li>
            <li onClick={togglevisiblePopup3} className="header__nav" ref={sortRef3}>
              <a className="header__nav-hover" href="#!">
                УКР<div className={visiblePopup3 ? 'rotade' : 'header-symbol'}></div>
              </a>
              {visiblePopup3 && (
                <div className="popup-about-us">
                  <ul className="popup-ul">
                    <li className="popup-li"> Українська</li>
                    <li className="popup-li"> English </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <HashLink smooth to="/#donate">
          <ButtonFunc class="header-button">Допомогти</ButtonFunc>
        </HashLink>
      </div>
    </div>
  );
}

export default But;
