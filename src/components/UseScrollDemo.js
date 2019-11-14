import React from 'react';
import useScroll from './useScroll';

import './useScroll.scss';

const UseScroll = () => {
  const { x, y, direction } = useScroll();

  return (
    <div className="useScroll">
      <h1>
        Use Scroll Custom Hook
      </h1>
      <aside>
        ↔️: <strong>{x}px</strong><br />
        ↕️: <strong>{y}px</strong><br />
        🔃: <strong>{direction}</strong>
      </aside>
      <div className="content">
        {
          [..."qwertyuiopasdfghjklzxcvbnm"].map(p => (
            <p key={`p-${p}`}>
              Bacon ipsum dolor amet meatball picanha kevin tail filet mignon cow
              pork loin. Shoulder ground round pastrami, meatball tri-tip ham hock
              t-bone kevin porchetta landjaeger. Swine ham hock filet mignon brisket
              ground round. Pastrami doner beef ribs, venison jerky ball tip picanha
              chuck drumstick tenderloin beef cow.
            </p>
          ))
        }
      </div>
    </div>
  );
}

export default UseScroll;