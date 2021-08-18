import styled from "styled-components";

export const PContainer = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
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

export const CarouselContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const CardNewHabit = styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-bottom: 1em;
    margin-top: 2em;

    /* input {
      height: 60px;
      width: 150px;
      margin: 10px 10px 30px 30px;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 16.5px );
      -webkit-backdrop-filter: blur( 16.5px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    }*/

    button {
      cursor: pointer;
      background-color: #5965e0;
      color: white;
      border: none;
      border-radius: 15px;
      box-sizing: border-box;
      margin: 1em;
      margin-top: 10px;
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
    }

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
