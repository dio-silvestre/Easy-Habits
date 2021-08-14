import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const HeaderMobile = () => {
  const [menuDisplay, setMenuDisplay] = useState("hidden");
  const [open, setOpen] = useState(false);

  const openMobileMenu = () => {
    setMenuDisplay("visible");
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setMenuDisplay("hidden");
    setOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="easyHabits">EasyHabits</div>
        </Link>
        <MenuIcon onClick={openMobileMenu}></MenuIcon>
        <HeaderNav menuDisplay={menuDisplay} open={open}>
          <div className="closeMenu" onClick={closeMobileMenu}>
            X
          </div>
          <Link className="link-nav" to="#">
            Como funciona
          </Link>
          <Link className="link-nav" to="#">
            Contato
          </Link>
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
