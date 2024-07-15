import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Turn } from 'hamburger-react';

import ERButton from '../../../../../global/generics/button';
import ERTooltip from '../../../../../global/generics/tooltip';

import {
  ButtonContainer,
  Container,
  FullWithBox,
  Logo,
  NavItems,
} from './style';

const Navbar = ({ type = 'secondary' }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <FullWithBox type={type}>
      <Container className='er-wrapper'>
        <Link to={'/'}>
          <Logo />
        </Link>

        <NavItems>
          <NavItems.Item to='/'>Home</NavItems.Item>
          <NavItems.Item to='/ranking'>Ranking</NavItems.Item>
          <NavItems.Item to='/about'>About</NavItems.Item>
          <NavItems.Item to='/blog'>Blog</NavItems.Item>
        </NavItems>

        <ButtonContainer>
          <Link to='/login'>
            <ButtonContainer.Login type={type}>Login</ButtonContainer.Login>
          </Link>
          <Link to='register'>
            <ERButton>Sign Up</ERButton>
          </Link>
        </ButtonContainer>
        <ERTooltip className='menu'>
          <div>
            <Turn toggled={isOpen} toggle={setIsOpen} />
          </div>
        </ERTooltip>
      </Container>
    </FullWithBox>
  );
};

export default Navbar;
