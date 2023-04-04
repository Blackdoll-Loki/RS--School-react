import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Page not found</p>
      <p>
        Go 😴 <Link to="/">home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
