import { FooterContainer } from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterDash = () => {
  return (
    <FooterContainer>

        <ul>
          <li className="socialMedia">
          <AlternateEmailIcon />
          info@easyhabits.com
          </li>
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

export default FooterDash;
