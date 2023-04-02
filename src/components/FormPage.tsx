import React, { useState } from 'react';
import Form from './Form';
import FormCard from '../components/FormCard';
import { FormPageState, collectedInfo } from 'interfaces/FormInterface';
import '../styles/Homepage.css';

function FormPage() {
  const [formInfoArr, setFormInfoArr] = useState([]);

  function handleProps(info: collectedInfo) {
    setFormInfoArr((formInfoArr) => formInfoArr.concat(info));
  }
  return (
    <div>
      <Form onSubmit={handleProps} />
      <div className="Cards-block">
        {formInfoArr.map((el: collectedInfo, idx) => {
          return <FormCard info={el} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default FormPage;
