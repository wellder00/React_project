import React from 'react';

function Popap({items, }) {
  return (   
    <div className="popap-about-us">
      <ul className='popap-ul'>
        {items.map((item, index) => <li key={`${item}_${index}`} className='popap-li'>{item}</li>)}        
      </ul>
    </div>
  );
}

export default Popap;