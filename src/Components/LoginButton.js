import React from 'react';

export const LoginButton = ({loginWithRedirect}) => {
  return <button onClick={loginWithRedirect}>Log in</button>;
}
