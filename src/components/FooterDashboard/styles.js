import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--violetCore);
  height: 50px;
  width: 100vw;
  padding-top: 15px;
  justify-content: center;
  align-items: center;


  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .socialMedia {
    z-index: 1;
  }

  /* @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;
    padding: 20px;
  } */
`;
