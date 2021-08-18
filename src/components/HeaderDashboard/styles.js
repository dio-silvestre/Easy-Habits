import styled from "styled-components";

export const Logo = styled.div`
  padding: 20px 0 10px 30px;
  float: left;
  color: var(--violetCore);
  font-size: 1.8rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
    transition: 1s;
  }
`

export const MenuDesktop = styled.div`
  padding: 20px 30px 10px 0;
  float: right;
  color: var(--violetCore);
  font-size: 1.2rem;

      .icone-grupos:hover {
        font-weight: 600;
        text-decoration: underline;
      }

  button {
    width: 100px;
    margin-left: 50px;
  }

      @media only screen and (max-width: 500px) {
          display: none;
      }
`

export const MenuMobile = styled.div`
  padding: 20px 30px 10px 0;
  float: right;
  color: var(--violetCore);
  font-size: 1.2rem;

  button {
    width: 2rem;
    margin-left: 20px;
  }

      @media only screen  and (min-width: 500px) {
          display: none;
      }
`

export const HContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

