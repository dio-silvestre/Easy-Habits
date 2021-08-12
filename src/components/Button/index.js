<<<<<<< HEAD
import { StyledButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
};
=======
import { StyledButton } from "./styles.js";

function Button() {
  return <StyledButton></StyledButton>;
}
>>>>>>> feature-tela-cadastro

export default Button;
