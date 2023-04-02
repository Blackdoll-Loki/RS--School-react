import React from 'react';
import { propsData } from '../interfaces/interfaces';
import '../styles/Card.css';

function Card(props: propsData) {
  return (
    <div className="Card" role="card">
      <img src={props.data.image} className="cardImage" alt="photo" />
      <h2>{props.data.name}</h2>
      <p className="species">{props.data.species}</p>
      <p className="gender">{props.data.gender}</p>
      <p className="status">{props.data.status}</p>
    </div>
  );
}

export default Card;
