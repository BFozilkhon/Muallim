import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 100px;
  right: 24px;
  background-color: var(--primary-color);
  cursor: pointer;
  z-index: 99999;

  &:active {
    transform: scale(0.98);
  }

  .icon {
    font-weight: 900;
    color: white;
    font-size: 30px;
  }
`;
