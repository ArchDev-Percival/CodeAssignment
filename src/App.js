import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import PageLayout from "./Components/PageLayout";
import { BrowserRouter as Router } from "react-router-dom";
import loading from "./assets/loading.svg";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isLoading) {
    return (
      <div>
        <img src={loading} alt="reloading"></img>
      </div>
    );
  }

  return (
    <ErrorBoundary>
    <Router history={history}>
      <div className="App">
        <PageLayout />
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
