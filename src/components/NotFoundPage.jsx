import React from 'react';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Error 404</h1>
        <p>Page n0ot found</p>
        <p>
          Go 😴 <a href="/">home</a>
        </p>
      </div>
    );
  }
}
