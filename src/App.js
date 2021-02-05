import logo from "./logo.svg";
import "./App.css";
import { AuthenticateUI } from "./Components/AuthenticateUI.js";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import PageLayout from "./Components/PageLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  function checkEmailVerifified(user) {
    if (isAuthenticated && !user.email_verified) {
      logout({ returnTo: window.location.origin });
      throw new Error("Please verify your email before logging in.");
    }
  }

  return (
    <Router history={history}>
      <div className="App">
        {checkEmailVerifified(user)}
        <PageLayout
          isAuthenticated={isAuthenticated}
          loginWithRedirect={loginWithRedirect}
          logout={logout}
          user={user}
        />
      </div>
    </Router>
  );
}

export default App;
