import { Redirect, Route as ReactRout } from "react-router-dom";
import { useAuth } from "../Providers/Auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <ReactRout
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
