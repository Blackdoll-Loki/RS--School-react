import React from 'react';

class FormCard extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="FormCard">
        <img src="" alt="photo" />
        <h2>name</h2>
        <p>gender</p>
        <p>Was born birthday</p>
        <p>Live in country</p>
        <p>Job</p>
      </div>
    );
  }
}

export default FormCard;
