import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const HeaderDashMobile = () => {
  const [menuDisplay, setMenuDisplay] = useState("hidden");

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="easyHabits">EasyHabits</div>
        </Link>
        <MenuIcon onClick={() => setMenuDisplay("visible")}></MenuIcon>
        <HeaderNav menuDisplay={menuDisplay}>
          <div className="closeMenu" onClick={() => setMenuDisplay("hidden")}>
            X
          </div>
          <Link className="link-nav" to="#">
            Grupos
          </Link>
          <Link className="link-nav" to="#">
            Logout
          </Link>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderDashMobile;
