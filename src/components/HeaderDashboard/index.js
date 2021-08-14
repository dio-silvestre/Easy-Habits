import { Link, useHistory } from "react-router-dom";
import { Logo, Menu } from "./styles";
import { FiUsers } from "react-icons/fi"
import Button from "../Button";

const HeaderDash = () => {
  const history = useHistory();

  return (
    <>
      <Logo>
        <Link to="/">
          <div className="easyHabits">EasyHabits</div>
        </Link>
      </Logo>
      <Menu>
          <Link className="icone-grupos" to="#">
            Grupos <FiUsers />
          </Link>
          <Button onClick={() => {
          localStorage.clear();
          return history.push("/");
        }}>Logout</Button>
      </Menu>
    </>
  );
};

export default HeaderDash;
