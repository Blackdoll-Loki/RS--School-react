import React from 'react';
import { propsData } from '../interfaces';
import '../styles/Card.css';

class Card extends React.Component<propsData> {
  constructor(props: propsData) {
    super(props);
  }
  render() {
    console.log;
    return (
      <div className="Card" key={this.props.key}>
        <img src={this.props.data.image} />
        <h2>{this.props.data.name}</h2>
        <p>{this.props.data.species}</p>
        <p>{this.props.data.gender}</p>
        <p>{this.props.data.status}</p>
      </div>
    );
  }
}

export default Card;
