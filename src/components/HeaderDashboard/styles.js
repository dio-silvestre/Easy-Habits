import styled from "styled-components";

export const Logo = styled.div`
  padding: 20px 0 10px 30px;
  float: left;
  color: var(--violetCore);
  font-size: 2rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    transition: 1s;
  }
`

export const Menu = styled.div`
  padding: 20px 30px 10px 0;
  float: right;
  color: var(--violetCore);
  font-size: 1.2rem;

      &:hover {
        font-weight: 600;
        text-decoration: underline;
      }

  button {
    width: 100px;
    margin-left: 50px;
  }

      @media only screen and (max-width: 768px) {
          display: none;
      }
`

export const NovoHabito = styled.div`
  section { 
    display: flex;
    width: 100vw;
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
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

export const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 30px 50px 50px 50px;
  align-items: center;

  .icone-grupos {
    padding-left: 350px;
    color: var(--violetCore);
    font-size: 1.2rem;

      &:hover {
        font-weight: 600;
        text-decoration: underline;
      }
  }

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  width: 45vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .botao-grupos {
    color: var(--violetCore);
    font-size: 1.2rem;

    &:hover {
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
