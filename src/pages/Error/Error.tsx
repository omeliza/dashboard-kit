import { IErrorProps } from 'interfaces/interfaces';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ resetErrorBoundary }: IErrorProps) => {
  return (
    <>
      <h1>Ooops...something went wrong!</h1>
      <h3>Try to return to the main page</h3>
      <Link to="/">
        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </Link>
    </>
  );
};

export default Error;
