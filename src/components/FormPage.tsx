import React from 'react';
import Form from './Form';
import FormCard from '../components/FormCard';
import { FormPageState, collectedInfo } from 'interfaces/FormInterface';
import '../styles/Homepage.css';

class FormPage extends React.Component<unknown, FormPageState> {
  constructor(props: unknown) {
    super(props);
    this.handleProps = this.handleProps.bind(this);
    this.state = {
      formInfoArr: [],
    };
  }
  handleProps(info: collectedInfo) {
    this.setState((state) => ({
      formInfoArr: state.formInfoArr.concat(info),
    }));
  }
  render(): React.ReactNode {
    return (
      <div>
        <Form onSubmit={this.handleProps} />
        <div className="Cards-block">
          {this.state.formInfoArr.map((el: collectedInfo, idx) => {
            return <FormCard info={el} key={idx} />;
          })}
        </div>
      </div>
    );
  }
}

export default FormPage;
