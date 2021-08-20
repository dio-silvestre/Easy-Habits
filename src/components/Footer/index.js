import { FooterContainer } from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import BusinessIcon from "@material-ui/icons/Business";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <BusinessIcon />
          Rua Antônio Segre, 500 - Curitiba, PR
        </li>
        <li>
          <AlternateEmailIcon />
          info@easyhabits.com
        </li>
      </ul>
      <ul>
        <li>Sobre EasyHabits</li>
        <li>Nosso time</li>
        <li>Fale Conosco</li>
      </ul>
      <ul>
        <li className="socialMedia">
          <InstagramIcon />
          Instagram
        </li>
        <li className="socialMedia">
          <TwitterIcon />
          Twitter
        </li>
        <li className="socialMedia">
          <LinkedInIcon />
          LinkedIn
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
