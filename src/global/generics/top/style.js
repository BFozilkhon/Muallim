import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: var(--primary-color);
  cursor: pointer;
  z-index: 99999;
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:active {
    transform: scale(0.98);
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .icon {
    font-weight: bold;
    color: white;
    font-size: 32px;
  }
`;
