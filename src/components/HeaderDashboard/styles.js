import styled from "styled-components";

export const Logo = styled.div`
  padding: 20px 0 10px 30px;
  float: left;
  color: var(--violetCore);
  font-size: 1.8rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
    transition: 1s;
  }
`;

export const MenuDesktop = styled.div`
  padding: 20px 30px 10px 0;
  float: right;
  color: var(--violetCore);
  font-size: 1.2rem;

  .icone-grupos:hover {
    font-weight: 600;
    text-decoration: underline;
  }

  button {
    width: 100px;
    margin-left: 50px;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  padding: 20px 30px 10px 0;
  float: right;
  color: var(--violetCore);
  font-size: 1.2rem;

  button {
    width: 2rem;
    margin-left: 20px;
  }

  @media only screen and (min-width: 500px) {
    display: none;
  }
`;

export const HContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
    display: flex;

    .arrowBack {
      margin: 0;
      visibility: hidden;

      svg {
        color: var(--violetCore);
      }
    }

    button {
      width: 50%;
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 95%;

    .easyHabits {
      .arrowBack {
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: visible;

        svg {
          font-size: 1.6rem;
          margin-left: 50px;

          cursor: pointer;
        }
      }
    }
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;

  .habits-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .link-nav {
    color: var(--violetCore);
    font-size: 1.2rem;
    border-bottom: 4px solid transparent;
    line-height: 100%;
    font-weight: 600;

    &:hover {
      border-bottom: 4px solid var(--violetCore);
    }
  }

  svg {
    font-size: 2.5rem;
    color: var(--violetCore);
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;

    button {
      display: none;
    }
  }
`;
