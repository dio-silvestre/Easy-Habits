import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4OTgyNzQ4LCJqdGkiOiI3NTFjYmNjOTljNWQ0NTIyYWJkZmNjNjc0YTU1OTA4NyIsInVzZXJfaWQiOjE2MjN9.6OwSf_CG2CT8YoiTGk20BvBGuty6OVY2oKuaawe90MY";
    const decoded = jwtDecode(token);
    console.log(decoded);

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
