import { Container } from "./styles";
import ErrorImage from "../../assets/page_not_found.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container>
      <h1>
        OPS ! <span> A página que você está procurando não foi encontrada</span>
      </h1>

      <img alt="error" src={ErrorImage}></img>
      <div>
        <p>
          <Link to="/">
            <h2>
              Entre agora no <span className="easyHabits">EasyHabits</span>
            </h2>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default PageNotFound;
