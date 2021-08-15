import { Link, useHistory } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import Button from "../Button";
import { FiUsers } from "react-icons/fi"

const HeaderDash = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="easyHabits">EasyHabits</div>
        </Link>
        <HeaderNav>
          <Link className="link-nav" to="#">
            Grupos <FiUsers />
          </Link>
          <Link className="link-nav" to="#">
            Contato
          </Link>
          <Button onClick={() => {
          localStorage.clear();
          return history.push("/");
        }}>Logout</Button>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderDash;
