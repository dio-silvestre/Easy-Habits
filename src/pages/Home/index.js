import Header from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { HomeContainer, HeroContainer, AboutContainer } from "./styles";
import LottieAnimation from "../../components/Lotties";
import Animation from "../../assets/HomeAnimation.json";
import Button from "../../components/Button";
import Bulb from "../../assets/Bulb.svg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <>
      <Header />
      <HeaderMobile />
      <HomeContainer>
        <HeroContainer>
          <div className="heroInfo">
            <h1>Construa hábitos</h1>
            <p>
              Nosso app vai te ajudar a ter mais disciplina para alcançar os
              seus objetivos de uma forma rápida e fácil!{" "}
            </p>
            <Button onClick={() => handleNavigation("/signup")}>
              Quero testar!
            </Button>
          </div>
          <div className="lootie">
            <LottieAnimation lotti={Animation} height={500} width={700} />
          </div>
        </HeroContainer>
        <AboutContainer>
          <figure>
            <img src={Bulb} alt="bulb" />
          </figure>
          <div className="aboutInfo">
            <h4>POR QUE EASYHABITS?</h4>
            <h2>
              Grandes mudanças começam com pequenos passos. Construa seu novo
              futuro com EasyHabits!
            </h2>
          </div>
        </AboutContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
