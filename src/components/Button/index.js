import { StyledButton } from "./styles";

const Button = ({ children, colorSchema = false, ...rest }) => {
  return (
    <StyledButton colorSchema={colorSchema} type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
