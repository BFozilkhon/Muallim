import styled from 'styled-components';

// icons
import { ReactComponent as PrevArrow } from '../../../../../shared/assets/icons/prev-arrow.svg';
import { ReactComponent as NextArrow } from '../../../../../shared/assets/icons/next-arrow.svg';

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  color: var(--white-color);
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  outline: none;
  border: none;
  @media (max-width: 920px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 480px) {
    top: 45%;
  }
`;

export const PrevButton = styled(Button)`
  left: 0px;
  path {
    stroke: var(--white-color);
  }
`;

PrevButton.Arrow = styled(PrevArrow)``;

export const NextButton = styled(Button)`
  right: 0px;
`;

NextButton.Arrow = styled(NextArrow)``;
