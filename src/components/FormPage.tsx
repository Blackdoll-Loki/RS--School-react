import React, { useState } from 'react';
import Form from './Form';
import FormCard from '../components/FormCard';
import { collectedInfo } from 'interfaces/FormInterface';
import '../styles/Homepage.css';

function FormPage() {
  const [formInfoArr, setFormInfoArr] = useState<collectedInfo[]>([]);

  function handleProps(info: collectedInfo) {
    setFormInfoArr((formInfoArr) => [...formInfoArr, info]);
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
