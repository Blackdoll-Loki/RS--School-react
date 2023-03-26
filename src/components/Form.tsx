import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="name">
          What is your name?
          <input type="text" value="" id="name" />
        </label>
        <label>
          When is your birthday?
          <input type="date" />
        </label>
        <select name="country" id="country">
          <option selected>Where do you live after 24.02.2022?</option>
          <option value="Ukraine">Ukraine</option>
          <option value={'Germany'}>Germany</option>
          <option value={'Great Britain'}>Great Britain</option>
          <option value={'Poland'}>Poland</option>
          <option value={'Portugal'}>Portugal</option>
          <option value={'Spain'}>Spain</option>
          <option value={'Netherland'}>Netherland</option>
        </select>
        <fieldset>
          <legend>Do you have a job?</legend>
          <input type="checkbox" name="work" id="job" />
          <label htmlFor="job">Yes, I have a job</label>
          <input type="checkbox" name="work" id="student" />
          <label htmlFor="student">I&apos;m a student</label>
          <input type="checkbox" name="work" id="unemployed" />
          <label htmlFor="unemployed">I&apos;m unemployed</label>
          <input type="checkbox" name="work" id="minor" />
          <label htmlFor="minor">I&apos;m too young</label>
        </fieldset>
        <fieldset>
          <legend>What gender are you</legend>
          <label htmlFor="male">
            Male
            <input type="radio" name="gender" id="male" />
          </label>
          <label htmlFor="female">
            Female
            <input type="radio" name="gender" id="female" />
          </label>
        </fieldset>
        <label htmlFor="ava">
          Unload your avatar
          <input type="file" name="avatar" id="ava" />
        </label>
        <button type="submit">Submit form</button>
      </form>
    );
  }
}

export default Form;
