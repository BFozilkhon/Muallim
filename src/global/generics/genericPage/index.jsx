import React from 'react';
import ERButton from '../button';
import { Link } from 'react-router-dom';

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
