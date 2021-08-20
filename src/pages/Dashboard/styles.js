import styled from "styled-components";

export const PContainer = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  color: var(--violetCore);
  font-size: 1.2rem;
  align-items: center;

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
`;

export const CardContainer = styled.div`
    background-color: rgba(178, 185, 255, 0.25);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .msgDsh{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 110px;
    color: var(--violetCore);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 70vh;
  background-color: white;
  margin: 5% auto;
  gap: 20px;
  border: 5px solid var(--violetLight);
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19); 

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 80vh;
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

    }

      button:hover {
        transition: all 250ms linear;
        opacity: 0.6;
      }

      button:active {
        transition: all 150ms linear;
        opacity: 0.75;
      }
    }
`;


export const PageContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-top: 20px;


`;