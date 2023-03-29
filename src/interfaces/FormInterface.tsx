import React from 'react';
type handleSubmitType = (formState: collectedInfo) => void;
interface FormProps {
  onSubmit: handleSubmitType;
}
/*interface FormState {
  name: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  haveJob: React.RefObject<HTMLFieldSetElement>;
  gender: React.RefObject<HTMLFieldSetElement>;
  photo: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
}*/
interface collectedInfo {
  birthday: string;
  name: string;
  country: string;
  haveJob: string;
  gender: string;
  photo: File;
  photoUrl: string;
}
interface FormPageState {
  formInfoArr: collectedInfo[];
}
export { FormProps, FormPageState, collectedInfo, handleSubmitType };
