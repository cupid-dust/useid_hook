import React, { useId } from 'react';

const Form = () => {
  const id = useId();

  return (
    <React.Fragment>
      <label htmlFor={id}>Email</label>
      <input id={id} type='email' />
    </React.Fragment>
  );
};

export default Form;
