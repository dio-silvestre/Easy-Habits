import { StyledButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
