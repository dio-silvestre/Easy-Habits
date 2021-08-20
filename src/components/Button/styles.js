import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: ${(props) =>
    props.colorSchema ? "var(--darkBlue)" : "var(--violetCore)"};
  color: var(--white);
  border: none;
  padding: 10px;
  width: 10vw;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 20.45px;

  &:hover {
    filter: brightness(1.1);
    transition: all 250ms linear;
  }

  &:active {
    transition: all 150ms linear;
  }
`;
