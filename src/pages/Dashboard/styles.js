import styled from "styled-components";

export const PContainer = styled.div`
<<<<<<< HEAD
    margin: 30px;
    display: flex;
    color: var(--violetCore);
    font-size: 1.2rem;
    align-items: center;

        button {
            margin-left: 20px;
            width: 130px;
            height: 40px;
            font-size: 1rem;
        }

        @media only screen and (min-width: 320px) {

        }
`;
=======
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
  display: flex;
  color: var(--violetCore);
  font-size: 1.2rem;
  align-items: center;
>>>>>>> origin

  button {
    margin-left: 20px;
    width: 130px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const CardNewHabit = styled.div`
    .error {
      text-align: left;
      color: #c1292e;
      font-size: 12px;
      margin-top: 5px;
    }
  }
`;

export const CardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 30%;
  background-color: white;
  margin: 5% auto;
  gap: 20px;
  border: 5px solid var(--violetLight);
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19); 

  @media (max-width: 1100px) {
    width: 85%;
    height: 85vh;
  }

  h1 {
    color: var(--violetCore);
    text-align: center;
    margin-bottom: 30px;
  } 

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 350px;
    margin-bottom: 0.5em;
  
    button {
      cursor: pointer;
      background-color: #5965e0;
      color: white;
      border: none;
      border-radius: 15px;
      box-sizing: border-box;
      
      margin: 10px;
      margin-bottom: 15px;
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
