import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Habits:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
