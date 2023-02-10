import React from 'react';

function popup({items}) {
  return (   
    <div className="popup-about-us">
      <ul className='popup-ul'>
        {items.map((item, index) => <li key={`${item}_${index}`} className='popup-li'>{item}</li>)}        
      </ul>
    </div>
  );
}

export default popup;