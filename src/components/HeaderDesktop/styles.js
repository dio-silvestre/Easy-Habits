import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 0px;

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
`;
