import React from 'react';

import ButtonFunc from './ButtonFunc';

function But() {
  return (
    <div className="some-stats">
      <div className="some-stats_wrapper _container">
        <div className="header-block">
          <div className="header-block__header">Наша допомога у цифрах</div>
        </div>
        <div className="image-block">
            <img src="/assets/icons/stats_fullImage.svg" alt="decore-img"></img>
        </div>
        <div className="button-single-block-card">
           <ButtonFunc class="card-block__some-stats-button">Всі звіти<img className='card-block__singl-button-arrow' src="/assets/icons/3.svg" alt="arrow" /></ButtonFunc>
        </div>
       </div>       
    </div>
  );
}

export default But;
