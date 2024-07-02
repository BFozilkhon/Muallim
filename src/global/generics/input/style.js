import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  padding: 15px 30px;
  border-radius: 80px;
  width: 400px;
  height: 60px;
  outline: none;
  border: 1px solid var(--primary-color);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  /* text */
  color: var(--primary-color);
  font-size: 20px;

  /* psudeo */
  &::placeholder {
    color: ${({ color }) => (color ? color : 'var(--primary-color)')};
    font-size: 20px;
  }

  &:focus {
    border-color: ${({ borderColor }) => borderColor || 'var(--primary-color)'};
    box-shadow: 0 0 10px
      ${({ borderColor }) => borderColor || 'var(--primary-color)'};
  }

  /* props */
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
