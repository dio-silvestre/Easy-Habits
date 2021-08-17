import { Link, useHistory } from "react-router-dom";
import { HContainer, Logo, MenuDesktop, MenuMobile } from "./styles";
import { FiUsers } from "react-icons/fi"
import Button from "../Button";

const HeaderDashboard = () => {
  const history = useHistory();

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
          <Button onClick={() => {
          localStorage.clear();
          history.push("/");
        }}>Logout</Button>
      </MenuDesktop>
      <MenuMobile>
          <Link className="icone-grupos" to="#">
            <FiUsers />
          </Link>
          <Button onClick={() => {
          localStorage.clear();
          return history.push("/");
        }}>X</Button>
      </MenuMobile>
      </HContainer>
    </>
  );
};

export default HeaderDashboard;
