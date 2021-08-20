import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1rem;
    color: var(--violetCore);
    text-align: center;
    margin: 20px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;

  .heroInfo {
    display: flex;
    flex-direction: column;
    gap: 25px;

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
      width: 300px;
      height: 45px;
      z-index: 1;
    }
  }

  .lootie {
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 335px;
    padding: 10px;
    margin-top: 5px;

    .heroInfo {
      width: 90%;
      padding: 0;
      margin: 0;
      padding: 0;

      h1 {
        display: none;
      }

      p {
        color: var(--darkBlue);
        font-size: 1.3rem;
        width: 100%;
      }

      button {
        margin-top: 10px;
        width: 50%;
        height: 45px;
        align-self: flex-start;
      }
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
    right: -450px;
    top: 1000px;
  }

  .ellipse2 img {
    width: 75%;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;
    padding: 0px;
    margin: 0;
    background-color: var(--lightViolet);

    .ellipse1,
    .ellipse2 {
      display: none;
    }

    figure {
      margin: 0;
      width: 100vw;
    }

    figure img {
      width: 100%;
      height: 100vh;
    }

    .aboutInfo {
      display: none;
    }
  }
`;
