import Header from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { HomeContainer, HeroContainer, AboutContainer } from "./styles";
import LottieAnimation from "../../components/Lotties";
import Animation from "../../assets/HomeAnimation.json";
import Button from "../../components/Button";
import Bulb from "../../assets/Bulb.svg";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";

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
            <LottieAnimation lotti={Animation} height={500} width={500} />
          </div>
        </HeroContainer>
        <AboutContainer>
          <div className="ellipse1">
            <img src={Ellipse1} alt="ellipse" />
          </div>
          <figure>
            <img src={Bulb} alt="bulb" />
          </figure>
          <div id="infoApp" className="aboutInfo">
            <h4>POR QUE EASYHABITS?</h4>
            <h2>
              Grandes mudanças começam com pequenos passos. Construa seu novo
              futuro com EasyHabits!
            </h2>
          </div>
          <div className="ellipse2">
            <img src={Ellipse2} alt="ellipse" />
          </div>
        </AboutContainer>
        <Footer />
        <strong id="footer">
          <em>&copy;Copyright 2021 - EasyHabits, Corp.</em>
        </strong>
      </HomeContainer>
    </>
  );
};

export default Home;
