import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  width: 45vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link-nav {
    color: var(--violetCore);
    font-size: 1.2rem;

    &:hover {
      font-weight: 600;
      text-decoration: underline;
    }
  }

  button {
    background-color: var(--violetCore);
    color: var(--white);
    border: none;
    font-family: "Raleway", sans-serif;
    padding: 10px;
    width: 10vw;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 20.45px;
  }
`;
