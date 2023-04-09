import React, { useRef } from 'react';
import { FormProps, collectedInfo } from '../interfaces/FormInterface';
import '../styles/Form.css';

function Form(props: FormProps) {
  const name = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const haveJob = useRef<HTMLFieldSetElement>(null);
  const country = useRef<HTMLSelectElement>(null);
  const gender = useRef<HTMLFieldSetElement>(null);
  const photo = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const obj = {
      birthday: birthday.current!.value,
      name: name.current!.value,
      country: '',
      haveJob: '',
      gender: '',
      photo: photo.current!.files![0],
      photoUrl: URL.createObjectURL(photo.current!.files![0]),
    };
    const countries = country.current?.querySelectorAll('option');
    countries?.forEach((option) => {
      if (option.selected) {
        obj.country = option.value;
      }
    });
    const haveJobInputs = haveJob.current?.querySelectorAll('input');
    haveJobInputs?.forEach((input) => {
      if (input.checked) {
        obj.haveJob = input.value;
      }
    });
    const genderRadio = gender.current?.querySelectorAll('input');
    genderRadio?.forEach((radio) => {
      if (radio.checked) {
        obj.gender = radio.value;
      }
    });

    console.log(obj);
    props.onSubmit(obj as collectedInfo);
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        What is your name?
        <input type="text" ref={name} id="name" className="nameInput" />
      </label>
      <label>
        When is your birthday?
        <input type="date" ref={birthday} className="dateInput" />
      </label>
      <select name="country" ref={country} className="select">
        <option>Where do you live after 24.02.2022?</option>
        <option value={'Ukraine'}>Ukraine</option>
        <option value={'Germany'}>Germany</option>
        <option value={'Great Britain'}>Great Britain</option>
        <option value={'Poland'}>Poland</option>
        <option value={'Portugal'}>Portugal</option>
        <option value={'Spain'}>Spain</option>
        <option value={'Netherland'}>Netherland</option>
      </select>
      <fieldset ref={haveJob}>
        <legend>Do you have a job?</legend>
        <input type="checkbox" name="work" value={'job'} />
        <label htmlFor="job" className="checkboxLabel">
          Yes, I have a job
        </label>
        <input type="checkbox" name="work" value={'student'} />
        <label htmlFor="student">I&apos;m a student</label>
        <input type="checkbox" name="work" value={'unemployed'} />
        <label htmlFor="unemployed">I&apos;m unemployed</label>
        <input type="checkbox" name="work" value={'minor'} />
        <label htmlFor="minor">I&apos;m too young</label>
      </fieldset>
      <fieldset ref={gender}>
        <legend>What gender are you</legend>
        <label htmlFor="male" className="radioLabel">
          Male
          <input type="radio" name="gender" id="male" value="male" />
        </label>
        <label htmlFor="female" className="radioLabel">
          Female
          <input type="radio" name="gender" id="female" value="female" />
        </label>
      </fieldset>
      <label htmlFor="ava">
        Unload your avatar
        <input type="file" name="avatar" id="ava" ref={photo} className="fileInput" />
      </label>
      <button className="submitBtn">Submit form</button>
    </form>
  );
}

export default Form;
