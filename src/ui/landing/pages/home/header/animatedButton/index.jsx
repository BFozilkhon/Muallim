import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import ERButton from '../../../../../../global/generics/button';

export const AnimatedButton = () => {
  const phrases = [
    'Welcome to Muallim',
    'Rate Your Teacher',
    'See Top-Ranking',
  ];

  return (
    <ERButton
      backgroundColor='#ffffff'
      color='#606060'
      padding='11px 33px'
      clickable={false}
    >
      🏆
      <Typewriter
        words={phrases}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </ERButton>
  );
};
