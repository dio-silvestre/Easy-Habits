import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="easyHabits">EasyHabits</div>
        <HeaderNav>
          <Link className="link-nav" to="#">
            Como funciona
          </Link>
          <Link className="link-nav" to="#">
            Contato
          </Link>
          {/* <Button>Login</Button>
          <Button>Cadastro</Button> */}
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
