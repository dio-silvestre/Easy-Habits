import { Redirect, Route as ReactRout } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from '../Providers/Auth'

const Route = ({ isPrivate = false, component: Component }) => {

    const { token } = useAuth();

    return (
        <ReactRout
            render={() => {
                return isPrivate === !!token ? (
                    <Component />)
                    :
                    (<Redirect
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
