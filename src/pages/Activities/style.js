import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    h1 {
      text-align: center;
    }
  }
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
    width: 90vw;
  }
`;

export const ActivitiesCard = styled.div`
  background-color: var(--violetLight);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  padding: 16px;
  border: 2px solid var(--darkBlue);
  color: var(--darkBlue);
  font-size: 1.2rem;
  overflow: visible;

  h2 {
    text-align: center;
    background-color: var(--darkBlue);
    width: 100%;
    color: var(--whiteText);
    padding: 10px;
    margin-bottom: 5px;
  }

  .goalsWrapper {
    h3 {
      margin: 20px auto;
      width: 80%;
      text-align: center;
      font-weight: 600;
      color: var(--violetCore);
    }

    ul {
      background-color: var(--violetLight);
      width: 100%;

      li {
        border-bottom: 1px dotted var(--darkBlue);
        padding: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .iconsWrapper {
          display: flex;
          margin: 5px;

          .done {
            svg {
              background-color: var(--green);
              cursor: pointer;
              color: var(--darkBlue);
            }
          }

          .delete {
            svg {
              color: var(--violetCore);
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 50px;
    width: 90vw;
    overflow: visible;
  }
`;

export const Line = styled.span`
  color: var(--darkBlue);
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: ${(props) => (props.goalUpdated ? "line-through" : "none")};
`;
