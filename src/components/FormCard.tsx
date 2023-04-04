import React from 'react';
import FormCardInfo from '../interfaces/FormCardInterface';
import '../styles/Card.css';
function FormCard(props: FormCardInfo) {
  return (
    <div className="Card">
      <img src={props.info.photoUrl} alt="photo" className="cardImage" />
      <h2>{props.info.name}</h2>
      <p className="gender">{props.info.gender}</p>
      <p>Was born {props.info.birthday}</p>
      <p>Live in {props.info.country}</p>
      <p>{props.info.haveJob}</p>
    </div>
  );
}

export default FormCard;
