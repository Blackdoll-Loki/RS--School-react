import React from 'react';
import { cardData, propsData } from '../interfaces';
import '../styles/Card.css';

class Card extends React.Component<propsData> {
  constructor(props: propsData) {
    super(props);
  }
  render() {
    console.log;
    return (
      <div className="Card" role="card">
        <img src={this.props.data.image} className="cardImage" alt="photo" />
        <h2>{this.props.data.name}</h2>
        <p className="species">{this.props.data.species}</p>
        <p className="gender">{this.props.data.gender}</p>
        <p className="status">{this.props.data.status}</p>
      </div>
    );
  }
}

export default Card;
