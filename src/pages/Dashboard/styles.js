import styled from 'styled-components'

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
            width: 150px;
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

    input {
      height: 60px;
      width: 150px;
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
        width: 150px;
    }
  }

`
