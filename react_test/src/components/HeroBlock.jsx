import React from 'react';
import ButtonFunc from './ButtonFunc';
import Slider from './Slider';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import { HashLink } from 'react-router-hash-link';

const imgArr = [
  {
    src: one
  },
  {
    src: two
  },
  {
    src: three
  },
  {
    src: four
  },
  {
    src: five
  }
];


function But() {
  return (
    <div id='hero' className="herro">
      <div className="wrapper-herro _container">
        <div className="content-block">
          <h1>Допоможіть постраждалим від війни</h1>
          <div>
            Війна застала нас у рідному Харкові. Ми на власні очі бачимо страждання та біль людей.
            Тому, ми створили благодійний фонд “A help” і тепер допомогаємо людям.
            <div>Долучайся і ти.</div>
          </div>
          <HashLink smooth to="/#donate">
            <ButtonFunc class="hero-button">
              Допомогти <img src="/assets/icons/3.svg" alt="arrow" />
            </ButtonFunc>
            </HashLink>
        </div>
        <div className="herro-img-block">
          <Slider imgArr={imgArr}/>
        </div>
      </div>
    </div>
  );
}

export default But;
