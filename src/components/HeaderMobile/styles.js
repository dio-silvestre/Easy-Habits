import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    visibility: visible;
  }
`;

export const HeaderNav = styled.nav`
  width: 55vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  gap: 5px;
  top: 0;
  right: 0;
  background-color: var(--darkBlue);
  visibility: ${({ menuDisplay }) => `${menuDisplay}`};

  .closeMenu {
    min-width: 100%;
    text-align: right;
    padding: 10px 15px;
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 600;
  }

  .link-nav {
    min-width: 100%;
    color: var(--white);
    font-size: 1.2rem;
    transition: background-color 0.4s;
    padding: 15px;

    &:hover {
      background-color: var(--white);
      color: var(--violetCore);
      font-weight: 600;
    }
  }
`;
