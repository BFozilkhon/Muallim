import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// icon
import { ReactComponent as LogoIcon } from '../../../../../global/assets/icons/logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(LogoIcon)``;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 100px;

  .active {
    color: var(--primary-color);
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

ButtonContainer.Login = styled.div`
  color: var(--txt-description-color);
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

export { Container, Logo, NavItems, ButtonContainer };
