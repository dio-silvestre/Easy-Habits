import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  gap: 20px;

  border-radius: 4px;
  padding: 0px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;

  h1 {
    color: var(--violetCore);
    width: 80vw;
    text-align: center;
  }

  h2 {
    width: 80vw;
    text-align: center;
  }

  span {
    font-size: 20px;
  }

  img {
    height: 300px;
    width: 80%;
    margin: 0 30px;
  }

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
  }
`;
