import styled, { keyframes } from "styled-components";
import SignupImage from "../../assets/Cadastro.svg";

const apppearFromRight = keyframes`
from {
  opacity : 0 ;
  transform: translateX(50px)
} 

to{
  opacity: 1;
  transform: translateX(0px)
}
`;

export const HeaderContainer = styled.div`
  padding: 40px 50px 0px;
  height: 2vh;

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
    height: 90px;
    padding-left: 40px;
  }
`;

export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: stretch;

  @media (max-width: 1100px) {
    height: 73vh;
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
    background: url(${SignupImage}) no-repeat center;
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

    .MuiSvgIcon-root {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1100px) {
    background-color: var(--bkgdColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apppearFromRight} 1s;
  h1 {
    margin-bottom: 25px;
    color: #5965e0;
    font-size: 50px;
    text-align: center;
  }

  h3 {
    color: var(--darkBlue);
    font-size: 24px;
    text-align: center;
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
      font-size: 40px;
    }

    h3 {
      color: var(--darkBlue);
      font-size: 20px;
      margin-bottom: 30px;
      text-align: center;
    }

    p {
      margin: 5px auto;
      color: #2e384d;
      font-size: 20px;
    }

    a {
      font-weight: bolder;
      color: var(--violetCore);
      font-size: 18px;
    }

    .error {
      text-align: left;
      color: #c1292e;
      padding-left: 45px;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  @media (max-width: 1100px) {
    form {
      text-align: center;
      height: 100%;
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
  margin: 2em;

  padding: 5px;
  width: 220px;
  height: 40px;

  button:hover {
    transition: all 250ms linear;
    opacity: 0.6;
  }

  button:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  @media (max-width: 1100px) {
    margin-top: 20px;
    height: 34px;
    width: 210px;
  }
`;
