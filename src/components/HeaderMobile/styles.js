import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
  padding: 10px;

  .easyHabits {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
  }

  .MuiSvgIcon-root {
    color: var(--violetCore);
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    visibility: visible;
  }
`;

export const HeaderNav = styled.div`
  width: 50vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  gap: 5px;
  top: 0;
  right: 0;
  background-color: var(--darkBlue);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  .closeMenu {
    padding: 5px;
    width: 30px;
    height: 30px;
    margin: 15px;
    font-size: 1rem;
    color: var(--violetCore);
    font-weight: 600;
    border: 1px solid var(--violetCore);
    border-radius: 50%;
    align-self: flex-end;
    text-align: center;
  }

  .link-nav {
    min-width: 100%;
    color: var(--white);
    font-size: 1.2rem;
    transition: background-color 0.4s;
    padding: 15px;

    &:hover {
      background-color: var(--white);
      color: var(--violetCore);
      font-weight: 600;
    }
  }
`;
