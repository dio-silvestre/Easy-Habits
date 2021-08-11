import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Cadastrar</Link>
    </>
  );
};

export default Home;
