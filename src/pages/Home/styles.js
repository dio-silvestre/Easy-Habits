import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80vw;

  .heroInfo {
    width: 35vw;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 30px 120px 0px 0px;

    h1 {
      color: var(--darkBlue);
      font-size: 4rem;
      width: 100px;
    }

    p {
      color: var(--darkBlue);
      width: 450px;
      font-size: 1.5rem;
    }

    button {
      margin-top: 60px;
      align-self: center;
      width: 300px;
      height: 45px;
      z-index: 1;
    }
  }

  .lootie {
    width: 65vw;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .heroInfo {
      width: 100vw;
      margin: 0;
      align-items: center;
    }
    h1 {
      color: var(--darkBlue);
      font-size: 1rem;
      width: fit-content;
    }

    p {
      color: var(--darkBlue);
      font-size: 0.5rem;
      width: fit-content;
    }

    button {
      margin-top: 60px;
      align-self: center;
      width: 300px;
      height: 45px;
      z-index: 1;
    }

    .lootie {
      display: none;
    }
  }
`;

export const AboutContainer = styled.div`
  background-color: var(--darkBlue);
  width: 100vw;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 120px;

  .ellipse1 {
    position: absolute;
    left: -250px;
    top: 420px;
  }

  .ellipse1 img {
    width: 75%;
  }

  figure {
    width: 80vw;
    height: 400px;
    background-color: var(--violetLight);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;

    img {
      width: 300px;
      height: 300px;
      align-self: center;
    }
  }

  .aboutInfo {
    width: 40vw;
    height: 300px;

    h4 {
      color: var(--whiteText);
      font-weight: normal;
      margin-top: 30px;
    }

    h2 {
      color: var(--whiteText);
      width: 360px;
      font-size: 2rem;
      margin-top: 40px;
    }
  }

  .ellipse2 {
    position: absolute;
    right: -500px;
    top: 900px;
  }

  .ellipse2 img {
    width: 75%;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
    * {
      display: none;
    }
  }
`;
