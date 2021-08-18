import styled from "styled-components";

export const FormModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;

  .iconText {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: relative;
  }

  svg {
    background-color: var(--whiteText);
    color: var(--violetCore);
    position: absolute;
    font-size: 2.5rem;
    right: 0;
    cursor: pointer;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .groupsWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
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

    .arrowBack {
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

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 95%;

    .easyHabits {
      .arrowBack {
        display: flex;
        justify-content: center;
        visibility: visible;

        svg {
          font-size: 1.6rem;
          margin: 0px 60px;
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

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;

    button {
      display: none;
    }

    .habits-logo {
      display: none;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 20px;
  border: 5px solid var(--violetLight);
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  h1 {
    color: var(--violetCore);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 25px;
    margin-top: 20px;

    .error {
      text-align: left;
      color: #c1292e;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  button {
    width: 100%;
    font-family: "Raleway", sans-serif;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    width: 95vw;
  }
`;

export const OpenGroups = styled(FormContainer)`
  background-color: var(--darkBlue);
  border: 5px solid transparent;
  border-radius: unset;
  width: 100%;
  box-shadow: none;
  position: relative;

  h1 {
    color: var(--whiteText);
  }

  .my-groups {
    background-color: var(--violetCore);
    border: 2px solid var(--darkBlue);
    border-radius: 4px;
    padding: 15px;
    color: var(--white);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover + .groupInfo {
      display: block;
    }
  }

  .groupInfo {
    width: 50%;
    text-align: center;
    background-color: var(--bkgdColor);
    padding: 20px;
    position: absolute;
    border-radius: 4px;
    line-height: 30px;
    left: 1;
    top: 1;
    font-weight: 600;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    display: none;

    p:first-child {
      text-transform: uppercase;
    }

    strong {
      color: var(--violetCore);
    }
  }
`;

export const SubscribedGroups = styled(OpenGroups)`
  background-color: var(--violetCore);
  border: 5px solid var(--darkBlue);

  h1 {
    color: var(--whiteText);
  }

  .my-groups {
    position: relative;
    background-color: var(--darkBlue);

    &:hover + .groupDescription {
      display: block;
    }
  }

  .groupDescription {
    width: 50%;
    text-align: center;
    background-color: var(--bkgdColor);
    padding: 20px;
    position: absolute;
    border-radius: 4px;
    line-height: 30px;
    left: 1;
    top: 1;
    font-weight: 600;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    display: none;

    p:first-child {
      text-transform: uppercase;
    }

    strong {
      color: var(--violetCore);
    }
  }

  .subscribe {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  svg {
    margin-right: 10px;
    background-color: var(--whiteText);
    color: var(--violetCore);
    border: 1px solid var(--darkBlue);
    border-radius: 50%;
    position: absolute;
    font-size: 2.5rem;
    right: 0;
    cursor: pointer;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
