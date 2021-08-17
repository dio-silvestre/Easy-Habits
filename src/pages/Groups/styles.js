import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 20px;
  border: 5px solid var(--violetLight);
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  h1 {
    color: var(--violetCore);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 55%;
    gap: 25px;
    margin-top: 20px;
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

export const OpenGroups = styled(FormContainer)``;
export const SubscribedGroups = styled(FormContainer)``;
