import { CardHabit } from "./styles";

const Card = ({ children, ...rest }) => {
  return <CardHabit {...rest}>{children}</CardHabit>;
};

export default Card;
