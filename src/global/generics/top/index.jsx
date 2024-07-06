import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import { Container } from './style';

const Top = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container
        onClick={() => window.scrollTo(0, 0)}
        data-aos='fade-down'
        className={y >= 400 ? 'visible' : ''}
      >
        <Icon className='icon' icon='ep:top' />
      </Container>
    </>
  );
};

export default Top;
