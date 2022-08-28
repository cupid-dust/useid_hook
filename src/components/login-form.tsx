import React, { useId } from 'react';

const Login = () => {
  const id = useId();
  return (
    <React.Fragment>
      <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type='email' />
      </div>
      <div>
        <label htmlFor={`${id}-password`}>Password</label>
        <input id={`${id}-password`} type='password' />
      </div>
    </React.Fragment>
  );
};

export default Login;
