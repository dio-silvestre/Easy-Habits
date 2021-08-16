import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { HashLink as Anchor } from "react-router-hash-link";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="easyHabits">EasyHabits</div>
        </Link>
        <MenuIcon onClick={() => setOpen(!open)}></MenuIcon>
        <HeaderNav open={open}>
          <div className="closeMenu" onClick={() => setOpen(!open)}>
            X
          </div>
          <Link className="link-nav" to="/signup">
            Como funciona
          </Link>
          <Anchor className="link-nav" to="/#footer">
            Contato
          </Anchor>
          <Link className="link-nav" to="/login">
            Login
          </Link>
          <Link className="link-nav" to="/signup">
            Cadastro
          </Link>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderMobile;
