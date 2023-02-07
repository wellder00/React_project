import React from 'react';
import ButtonFunc from './ButtonFunc';

function But() {
  return (
    <div className="wrapper">
      <div className="logo"></div>
      <nav>
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
      </nav>
      <ButtonFunc onClick = {()=>alert('Hi from Header')} class="button button2">Кнопка2</ButtonFunc>
    </div>
  );
}

export default But;
