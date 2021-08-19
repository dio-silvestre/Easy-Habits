import styled from "styled-components";

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
  height: 40vh;
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
    }
  }

  .groupDescription {
    max-width: 90%;
    min-height: 5vh;
    overflow: -moz-hidden-unscrollable;
    width: 80%;
    font-size: 1.2rem;
    color: var(--darkBlue);

    strong {
      color: var(--violetCore);
    }
  }
`;

export const BottomContainer = styled(InfoContainer)`
  border-top-right-radius: unset;
  border-top-left-radius: unset;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: var(--violetCore);
`;
