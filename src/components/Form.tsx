import React from 'react';
import { FormProps, collectedInfo } from '../interfaces/FormInterface';

class Form extends React.Component<FormProps> {
  photo: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLFieldSetElement>;
  haveJob: React.RefObject<HTMLFieldSetElement>;
  country: React.RefObject<HTMLSelectElement>;
  birthday: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.name = React.createRef<HTMLInputElement>();
    this.birthday = React.createRef<HTMLInputElement>();
    this.haveJob = React.createRef<HTMLFieldSetElement>();
    this.country = React.createRef<HTMLSelectElement>();
    this.gender = React.createRef<HTMLFieldSetElement>();
    this.photo = React.createRef<HTMLInputElement>();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const obj = {
      birthday: this.birthday.current!.value,
      name: this.name.current!.value,
      country: '',
      haveJob: '',
      gender: '',
      photo: this.photo.current!.files![0],
      photoUrl: URL.createObjectURL(this.photo.current!.files![0]),
    };
    const countries = this.country.current?.querySelectorAll('option');
    countries?.forEach((option) => {
      if (option.selected) {
        obj.country = option.value;
      }
    });
    const haveJobInputs = this.haveJob.current?.querySelectorAll('input');
    haveJobInputs?.forEach((input) => {
      if (input.checked) {
        obj.haveJob = input.value;
      }
    });
    const genderRadio = this.gender.current?.querySelectorAll('input');
    genderRadio?.forEach((radio) => {
      if (radio.checked) {
        obj.gender = radio.value;
      }
    });

    console.log(obj);
    this.props.onSubmit(obj as collectedInfo);
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          What is your name?
          <input type="text" ref={this.name} id="name" />
        </label>
        <label>
          When is your birthday?
          <input type="date" ref={this.birthday} />
        </label>
        <select name="country" ref={this.country}>
          <option>Where do you live after 24.02.2022?</option>
          <option value={'Ukraine'}>Ukraine</option>
          <option value={'Germany'}>Germany</option>
          <option value={'Great Britain'}>Great Britain</option>
          <option value={'Poland'}>Poland</option>
          <option value={'Portugal'}>Portugal</option>
          <option value={'Spain'}>Spain</option>
          <option value={'Netherland'}>Netherland</option>
        </select>
        <fieldset ref={this.haveJob}>
          <legend>Do you have a job?</legend>
          <input type="checkbox" name="work" value={'job'} />
          <label htmlFor="job">Yes, I have a job</label>
          <input type="checkbox" name="work" value={'student'} />
          <label htmlFor="student">I&apos;m a student</label>
          <input type="checkbox" name="work" value={'unemployed'} />
          <label htmlFor="unemployed">I&apos;m unemployed</label>
          <input type="checkbox" name="work" value={'minor'} />
          <label htmlFor="minor">I&apos;m too young</label>
        </fieldset>
        <fieldset ref={this.gender}>
          <legend>What gender are you</legend>
          <label htmlFor="male">
            Male
            <input type="radio" name="gender" id="male" value="male" />
          </label>
          <label htmlFor="female">
            Female
            <input type="radio" name="gender" id="female" value="female" />
          </label>
        </fieldset>
        <label htmlFor="ava">
          Unload your avatar
          <input type="file" name="avatar" id="ava" ref={this.photo} />
        </label>
        <button>Submit form</button>
      </form>
    );
  }
}

export default Form;
