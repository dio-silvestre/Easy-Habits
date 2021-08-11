import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";

const Header = () => {
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
          <button>Login</button>
          <button>Cadastro</button>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
