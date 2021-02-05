import logo from './logo.svg';
import './App.css';
import {AuthenticateUI} from './Components/AuthenticateUI.js'
import { useAuth0 } from '@auth0/auth0-react';
import history from "./utils/history";
import TitlebarGridList from "./Components/TitleBarGridList"
import { waitFor } from '@testing-library/react';
import SelectInput from '@material-ui/core/Select/SelectInput';
import Album from "./Components/Page"

function App() {

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user
  } = useAuth0();

  function checkEmailVerifified(user) {
    if (isAuthenticated && !(user.email_verified)) {
      
      logout({ returnTo: window.location.origin });
      throw new Error('Please verify your email before logging in.');
      
  }
  }


  return (
    <div className="App"> 
     {checkEmailVerifified(user)}
      <AuthenticateUI isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect}
      logout={logout} user = {user}/>
      <TitlebarGridList/>
      <Album/>
    </div>
  );
}

export default App;
