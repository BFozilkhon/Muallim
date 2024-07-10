import React from 'react';

import Navbar from '../../../shared/layouts/navbar';
import ERButton from '../../../../../global/generics/button';
import { AnimatedButton } from './animatedButton';

import {
  Box1,
  Box2,
  Card,
  Container,
  Wrapper,
  IconBox,
  UserIcon,
} from './style';

const Header = () => {
  return (
    <Container>
      <Navbar type='primary' />

      {/* Main */}
      <Wrapper className='er-wrapper'>
        <Box1>
          <AnimatedButton />
          <Box1.Header>Rate Teachers and Find Top Educators</Box1.Header>
          <Box1.Line />
          <Box1.Descr>
            Enhance your learning experience with our rating system, social
            media promotions, and competitions.
          </Box1.Descr>

          <ERButton className='opener-btn'>Let's Rate</ERButton>
        </Box1>
        <Box2>
          <Box2.TeacherImg />

          {/* Cards */}
          <Card className='star-position'>
            <IconBox color='#FAFF00'>
              <IconBox.Star />
            </IconBox>
            <div>
              <Card.Subtitle>Top1 - 5 stars</Card.Subtitle>
              <Card.Descr>The Best Teacher</Card.Descr>
            </div>
          </Card>
          <Card user={true} className='user-position'>
            <UserIcon />
            <div>
              <Card.Subtitle>Anonym Message</Card.Subtitle>
              <Card.Descr>Today at 12.00 PM</Card.Descr>
            </div>
          </Card>
          <Card className='email-position'>
            <IconBox color='#F88C3D'>
              <IconBox.Email />
            </IconBox>
            <div>
              <Card.Subtitle>Cambridge LCC</Card.Subtitle>
              <Card.Descr>We offer you a job</Card.Descr>
            </div>
          </Card>
        </Box2>
      </Wrapper>
    </Container>
  );
};

export default Header;
