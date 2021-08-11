import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: lightgray;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }

    > div {
      margin-top: 16px;
    }
  }
`;
