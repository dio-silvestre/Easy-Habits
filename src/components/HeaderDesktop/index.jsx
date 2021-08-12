import { Link, useHistory } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import Button from "../Button";

const Header = () => {
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
            Como funciona
          </Link>
          <Link className="link-nav" to="#">
            Contato
          </Link>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
          <Button onClick={() => handleNavigation("/signup")}>Cadastro</Button>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
