import React from 'react';

import TopTeachersCarousel from './carousel';

import { Container, Wrapper } from './style';

const TopTeachers = () => {
  return (
    <Container className='er-wrapper'>
      <Container.Title className='er-title'>
        Our <span className='er-title-mark'>Leaderboard</span>
      </Container.Title>
      <Container.Descr className='er-title-description'>
        Achieved by our top performers in the last 3 months
      </Container.Descr>

      <Wrapper>
        <TopTeachersCarousel />
      </Wrapper>
    </Container>
  );
};

export default TopTeachers;
