import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Turn } from 'hamburger-react';

import ERButton from '../../../../../global/generics/button';
import ERTooltip from '../../../../../global/generics/tooltip';

import { ButtonContainer, Container, Logo, NavItems } from './style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'auto'; // change hidden then
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container className='er-wrapper'>
      <Logo />

      <NavItems>
        <NavItems.Item to='/'>Home</NavItems.Item>
        <NavItems.Item to='/ranking'>Ranking</NavItems.Item>
        <NavItems.Item to='/about'>About</NavItems.Item>
        <NavItems.Item to='/features'>Features</NavItems.Item>
      </NavItems>

      <ButtonContainer>
        <Link to='/login'>
          <ButtonContainer.Login>Login</ButtonContainer.Login>
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
  );
};

export default Navbar;
