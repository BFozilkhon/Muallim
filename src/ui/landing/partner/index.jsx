import React from 'react';
import { Box1, Box2, Container } from './style';
import PartnerCarousel from './carousel';

const Partner = () => {
  return (
    <Container className='er-wrapper'>
      <Box1>
        <Box1.Line />
        <Box1.Text>
          See why over 100,000 teams choose <br /> EduRate.uz
        </Box1.Text>
      </Box1>
      <Box2>
        <PartnerCarousel />
      </Box2>
    </Container>
  );
};

export default Partner;
