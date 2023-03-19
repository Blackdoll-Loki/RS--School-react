import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Error 404</h1>
        <p>Page n0ot found</p>
        <p>
          Go 😴 <Link to="/">home</Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
