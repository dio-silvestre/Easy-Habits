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
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;

  button {
    width: 20%;
    margin-top: -80px;
    margin-bottom: 30px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
      width: 80%;
      margin: auto;
    }
  }

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

      .iconText {
        font-size: 0.5rem;
      }
    }
  }

  .groupsWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

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
  align-items: flex-start;
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
    text-align: center;
    width: 100%;
    align-items: center;

    .easyHabits {
      .arrowBack {
        visibility: visible;
        text-align: center;

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
  background-color: var(--violetLight);
  border: 1px dotted var(--darkBlue);
  border-radius: 30px;
  width: 100%;
  box-shadow: none;
  position: relative;

  h1 {
    color: var(--darkBlue);
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
  }
`;

export const SubscribedGroups = styled(OpenGroups)`
  background-color: var(--violetLight);

  h1 {
    color: var(--darkBlue);
  }

  .my-groups {
    position: relative;
    background-color: var(--darkBlue);
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

      p {
        font-size: 0.8rem;
      }
  }
`;
