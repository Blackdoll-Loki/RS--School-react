import React from 'react';
import FormCardInfo from '../interfaces/FormCardInterface';
import '../styles/Card.css';
class FormCard extends React.Component<FormCardInfo> {
  constructor(props: FormCardInfo) {
    super(props);
  }
  render(): React.ReactNode {
    console.log(this.props.info.photo);
    return (
      <div className="Card">
        <img src={this.props.info.photoUrl} alt="photo" className="cardImage" />
        <h2>{this.props.info.name}</h2>
        <p className="gender">{this.props.info.gender}</p>
        <p>Was born {this.props.info.birthday}</p>
        <p>Live in {this.props.info.country}</p>
        <p>{this.props.info.haveJob}</p>
      </div>
    );
  }
}

export default FormCard;
