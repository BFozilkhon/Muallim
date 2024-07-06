import styled from 'styled-components';

//////// NEVER CHANGE GLOBAL CODE WITHOUT NOTIFY US!!! /////////

const getButtonType = ({ type }) => {
  switch (type) {
    case 'primary':
      return {
        background: 'var(--primary-color)',
        color: 'var(--white-color)',
      };
    case 'outlined':
      return {
        background: 'none',
        border: '1px solid var(--primary-color)',
        color: 'var(--primary-color)',
      };
    default:
      return {
        background: 'var(--primary-color)',
        color: 'var(--white-color)',
      };
  }
};

export const Container = styled.div`
  /* extra */
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  /* box */
  padding: 15px 50px;
  border-radius: 10px;
  width: fit-content;

  /* font */
  font-size: 26px;

  /* psudeo */
  &:active {
    transform: ${({ clickable }) => clickable && 'scale(0.95)'};
  }

  /* type Function */
  ${(type) => getButtonType(type)}

  /* props */
  cursor: ${({ clickable }) => clickable && 'pointer'};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: ${({ width }) => width};

  /* media */
  @media (max-width: 900px) {
    padding: 14px 45px;
    font-size: 24px;
  }
  @media (max-width: 600px) {
    padding: 13px 40px;
    font-size: 22px;
  }
  @media (max-width: 480px) {
    padding: 12px 35px;
    font-size: 20px;
  }
`;
