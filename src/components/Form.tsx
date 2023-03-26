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
          <label htmlFor="job">
            Yes, I have a job
            <input type="checkbox" name="work" id="job" />
          </label>
          <label htmlFor="student">
            I'm a student
            <input type="checkbox" name="work" id="student" />
          </label>
          <label htmlFor="unemployed">
            I'm unemployed
            <input type="checkbox" name="work" id="unemployed" />
          </label>
          <label htmlFor="minor">
            I'm too young
            <input type="checkbox" name="work" id="minor" />
          </label>
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
      </form>
    );
  }
}

export default Form;
