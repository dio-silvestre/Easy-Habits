import styled from "styled-components";

export const CardHabit = styled.div`
    width: 100px;
    background: rgba( 255, 255, 255, 0.80 );

    border-radius: 10px;
`;

export const CardNovoHabito = styled.div`
  section { 
    display: flex;
    width: 100vw;
    margin-bottom: 1em;
    margin-top: 2em;

    input {
      height: 60px;
      width: 12vw;
      margin: 10px 10px 30px 30px;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 16.5px );
      -webkit-backdrop-filter: blur( 16.5px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    button {
      margin-left: 20px;
      height: 60px;
      width: 10rem;
    }
  }

`
