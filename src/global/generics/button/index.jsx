import React from 'react';

import { Container } from './style';

const ERButton = ({
  children,
  type = 'primary',
  borderRadius,
  padding,
  margin,
  backgroundColor,
  color,
  clickable = true,
  onClick,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      type={type}
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
      color={color}
      margin={margin}
      clickable={clickable}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default ERButton;
