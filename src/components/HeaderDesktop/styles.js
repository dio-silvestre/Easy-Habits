import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0px;

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
    border-bottom: 4px solid transparent;
    line-height: 100%;

    &:hover {
      font-weight: 600;
      border-bottom: 4px solid var(--violetCore);
    }
  }
`;
