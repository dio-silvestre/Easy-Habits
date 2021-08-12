import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-bottom: 40px;

  .heroInfo {
    width: 35vw;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 40px;

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
    }
  }

  .lootie {
    width: 65vw;
  }
`;

export const AboutContainer = styled.div`
  background-color: var(--darkBlue);
  width: 100vw;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 80px;

  figure {
    width: 50vw;
    height: 400px;
    background-color: var(--violetLight);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      align-self: center;
    }
  }

  .aboutInfo {
    width: 40vw;
    height: 300px;
    margin: 60px;

    h4 {
      color: var(--whiteText);
      font-weight: normal;
    }

    h2 {
      color: var(--whiteText);
      width: 360px;
      font-size: 2rem;
      margin-top: 50px;
    }
  }
`;
