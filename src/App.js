import logo from './logo.svg';
import './App.css';
import {AuthenticateUI} from './Components/AuthenticateUI.js'
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user
  } = useAuth0();

  function checkEmailVerifified(user) {
    if (isAuthenticated && !(user.email_verified)) {
      throw new Error('Please verify your email before logging in.')
  }
  }
 

  return (
    <div className="App"> 
     {checkEmailVerifified(user)}
      <AuthenticateUI isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect}
      logout={logout} user = {user}/>
    </div>
  );
}

export default App;
