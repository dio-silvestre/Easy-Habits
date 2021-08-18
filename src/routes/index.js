import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import Group from "../pages/Group";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/dashboard/" component={Dashboard} isPrivate />
      <Route exact path="/groups/" component={Groups} isPrivate />
      <Route exact path="/groups/:id/" component={Group} isPrivate />
    </Switch>
  );
};

export default Routes;
