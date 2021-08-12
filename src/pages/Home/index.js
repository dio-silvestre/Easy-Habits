import Header from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HeaderMobile />
    </HomeContainer>
  );
};

export default Home;
