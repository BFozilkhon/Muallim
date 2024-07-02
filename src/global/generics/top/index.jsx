import React, { useEffect, useState } from 'react';

import { Container } from './style';

const Top = () => {
  const [y, setY] = useState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setY(window.scrollY);
    });
  }, []);

  return (
    <>
      {y >= 400 ? (
        <Container onClick={() => window.scrollTo(0, 0)} data-aos='fade-down'>
          Top
        </Container>
      ) : null}
    </>
  );
};

export default Top;
