import React from 'react';
import { Link } from 'react-router-dom';

import ERButton from '../button';

const GenericPage = () => {
  return (
    <div>
      <h1>Coming Soon {window.location.pathname}</h1>
      <Link to={'/'}>
        <ERButton>Go Back to Home</ERButton>
      </Link>
    </div>
  );
};

export default GenericPage;
