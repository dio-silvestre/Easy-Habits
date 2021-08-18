import styled, { keyframes } from "styled-components";
import LoginImage from "../../assets/Login.svg";

export const HeaderContainer = styled.div`
  padding: 40px 50px 0px;

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
    height: 90px;
    padding-left: 40px;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: stretch;

  @media (max-width: 1100px) {
    height: 63vh;
  }
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background-color: var(--bkgdColor);
    background-size: contain;
  }

  section {
    height: 100vh;
    width: 100%;
    background: url(${LoginImage}) no-repeat center;
  }
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    background-color: var(--bkgdColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 720px;
  }

  @media (max-width: 1100px) {
    background-color: var(--bkgdColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 50px;
  }
`;

const apppearFromLeft = keyframes`
from {
  opacity : 0 ;
  transform: translateX(-50px)
} 

to{
  opacity: 1;
  transform: translateX(0px)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apppearFromLeft} 1s;
  h1 {
    margin-bottom: 25px;
    color: #5965e0;
    font-size: 34px;
    text-align: center;
  }

  h3 {
    color: var(--darkBlue);
    font-size: 15px;
    text-align: center;
  }

  span {
  }

  form {
    margin: 20px 0;
    max-width: 360px;
    text-align: center;

    .MuiInputBase-input {
      color: var(--darkBlue);
      background-color: transparent;
      animation-duration: 14ms;
    }

    h1 {
      margin-bottom: 20px;
      color: #5965e0;
      font-size: 34px;
    }

    h3 {
      color: var(--darkBlue);
      font-size: 15px;
      margin-bottom: 15px;
    }

    p {
      margin: 5px auto;
      color: #2e384d;
      font-size: 16px;
    }

    a {
      font-weight: bolder;
      color: var(--violetCore);
      font-size: 18px;
    }

    .error {
      text-align: justify;
      color: #c1292e;
      padding-left: 45px;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  @media (max-width: 1100px) {
    form {
      margin: 10px 0;
      text-align: center;
      height: 100%;

      .MuiInputBase-input {
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #5965e0;
  color: white;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  margin: 1em;
  margin-top: 10px;
  padding: 5px;
  width: 220px;
  height: 30px;

  button:hover {
    transition: all 250ms linear;
    opacity: 0.6;
  }

  button:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  @media (max-width: 1100px) {
    margin-top: 30px;
    height: 34px;
    width: 210px;
  }
`;
