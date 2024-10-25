import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// icon
import { ReactComponent as LogoIcon } from '../../../../../global/assets/icons/logo.svg';

export const FullWithBox = styled.div`
  width: 100%;
  background: ${({ type }) => type === 'secondary' && 'var(--secondary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-img {
    width: 230px;
    height: 80px;
  }

  @media (max-width: 600px) {
    .logo-img {
      width: 180px;
      height: 60px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;

  .hamburger-react {
    color: white !important;
  }

  .menu {
    display: none;
  }

  @media (max-width: 1200px) {
    .menu {
      display: block;
    }
  }

  @media (max-width: 920px) {
    border-bottom: 2px solid var(--white-color);
  }
  @media (max-width: 600px) {
    padding-top: 15px;
    padding-bottom: 15px;
    .hamburger-react {
      transform: scale(0.9);
    }
  }
`;

export const Logo = styled(LogoIcon)`
  @media (max-width: 600px) {
    transform: scale(0.9);
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 100px;

  .active {
    color: var(--primary-color);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

NavItems.Item = styled(NavLink)`
  cursor: pointer;
  color: var(--white-color);
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

ButtonContainer.Login = styled.div`
  color: ${({ type }) =>
    type === 'secondary'
      ? 'var(--white-color)'
      : 'var(--txt-description-color)'};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 1200px) {
    color: var(--primary-color);
  }
`;
