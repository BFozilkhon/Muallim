import React from 'react';

import TestimonialCarousel from './carousel';

import { Container, Wrapper } from './style';

const Testimonial = () => {
  return (
    <Container className='er-wrapper'>
      <Container.Title className='er-title'>
        What <span className='er-title-mark'>Our Students</span> Say
      </Container.Title>
      <Container.TitleDescr className='er-title-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris
        non dictumst in leo. Lorem ipsum dolor sit amet.
      </Container.TitleDescr>
      <Wrapper>
        <TestimonialCarousel />
      </Wrapper>
    </Container>
  );
};

export default Testimonial;
