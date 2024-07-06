import React from 'react';

import { Input } from './style';

const ERInput = ({
  color,
  backgroundColor,
  borderColor,
  borderRadius,
  width,
  placeholder,
  ...rest
}) => {
  return (
    <Input
      color={color}
      width={width}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default ERInput;
