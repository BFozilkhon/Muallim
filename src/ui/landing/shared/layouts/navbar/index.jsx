import React from 'react';

import ERButton from '../../../../../global/generics/button';

import { ButtonContainer, Container, Logo, NavItems } from './style';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
    </Container>
  );
};

export default Navbar;
