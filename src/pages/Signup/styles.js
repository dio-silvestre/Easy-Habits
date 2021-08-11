import styled, { keyframes } from "styled-components";
import SignupImage from "../../assets/Cadastro.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background-color: #e5e5e5;

    background-size: contain;
  }

  section {
    height: 100vh;
    background: url(${SignupImage}) no-repeat center;
  }
`;

export const Content = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

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

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apppearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
      color: #5965e0;
      font: Raleway;
    }

    p {
      margin-top: 8px;
      color: #2e384d;
    }

    a {
      font-weight: bold;
      color: orange;
    }
  }
`;

export const Button = styled.button`
  background-color: #5965e0;
  display: block;
  width: 90%;
  margin: 10px auto;
  color: white;
  border-radius: 20px;
`;
