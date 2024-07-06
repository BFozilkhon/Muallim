import React from 'react';

import { Tooltip } from 'antd';

const ERTooltip = ({
  placement = 'top',
  title = 'This feature is gonna work SOON...',
  className,
  children,
}) => {
  return (
    <Tooltip className={className} placement={placement} title={title}>
      {children}
    </Tooltip>
  );
};

export default ERTooltip;
