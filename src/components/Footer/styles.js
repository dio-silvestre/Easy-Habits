import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 20vh;
  background-color: var(--violetCore);
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    gap: 5px;
  }

  ul li {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .socialMedia {
    z-index: 1;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    height: 40vh;
    align-items: flex-start;
    padding: 20px;
  }
`;
