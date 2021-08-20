import { Link, useHistory } from "react-router-dom";
import { 
  HeaderContainer,
  HeaderNav,
} from "./styles";
import Button from "../Button";
import { useAuth } from "../../Providers/Auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleAlt from "@material-ui/icons/PeopleAlt";

const HeaderDashboard = () => {
  const history = useHistory();
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    history.push("/");
  };

  return (
    <>
    <HeaderContainer>
        <div className="easyHabits">
        EasyHabits{" "}
          <div className="arrowBack">
            <Link to="/dashboard">
              <ExitToAppIcon onClick={handleLogOut} title="Logout" />
            </Link>
          </div>
        </div>
        <HeaderNav>
          <div className="habits-logo">
            <Link className="link-nav" to="/groups">
              Meus grupos
            </Link>
            <Link to="/groups">
              <PeopleAlt />
            </Link>
          </div>
          <Button onClick={handleLogOut}>Logout</Button>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderDashboard;
