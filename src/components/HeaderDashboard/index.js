import { Link, useHistory } from "react-router-dom";
import { HContainer, Logo, MenuDesktop, MenuMobile } from "./styles";
import { FiUsers } from "react-icons/fi";
import Button from "../Button";
import { useAuth } from "../../Providers/Auth";

const HeaderDashboard = () => {
  const history = useHistory();
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    history.push("/");
  };

  return (
    <>
      <HContainer>
        <Logo>
          <Link to="/">
            <div className="easyHabits">EasyHabits</div>
          </Link>
        </Logo>
        <MenuDesktop>
          <Link className="icone-grupos" to="/groups">
            Grupos <FiUsers />
          </Link>
          <Button
            onClick={() => {
              handleLogOut();
            }}
          >
            Logout
          </Button>
        </MenuDesktop>
        <MenuMobile>
          <Link className="icone-grupos" to="#">
            <FiUsers />
          </Link>
          <Button
            onClick={() => {
              handleLogOut();
            }}
          >
            X
          </Button>
        </MenuMobile>
      </HContainer>
    </>
  );
};

export default HeaderDashboard;
