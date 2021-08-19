import styled from "styled-components";

export const FormModal = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  gap: 20px;
  border: 5px solid var(--violetLight);
  border-radius: 4px;
  padding: 20px;
  background-color: var(--whiteText);
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

export const GroupContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .groupName {
    text-align: center;
    color: var(--violetCore);
    font-size: 2rem;
    font-style: italic;
    font-weight: 600;
    margin-top: -40px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

export const InfoContainer = styled.div`
  width: 55vw;
  height: 45vh;
  background-color: var(--violetLight);
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    button {
      margin-top: 10px;
      width: 80%;
      font-size: 1rem;
    }
  }

  .groupDescription {
    max-width: 90%;
    min-height: 5vh;
    overflow: -moz-hidden-unscrollable;
    width: 80%;
    font-size: 1.2rem;
    color: var(--darkBlue);
    margin-bottom: 10px;

    strong {
      color: var(--violetCore);
    }
  }
`;

export const BottomContainer = styled(InfoContainer)`
  height: 40vh;
  border-top-right-radius: unset;
  border-top-left-radius: unset;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: var(--violetCore);
`;

export const GoalsCard = styled.div``;
