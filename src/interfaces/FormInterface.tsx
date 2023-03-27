interface FormState {
  name: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLOptionElement>;
  work: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
}
export default FormState;
