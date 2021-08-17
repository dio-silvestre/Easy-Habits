import styled from "styled-components";

export const CardHabit = styled.div`
    width: 200;
    display: flex;

.habit-container {
    width: 250px;
    align-items: center;
    justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 25px;
  margin-left: 40px;
  h3 {
    padding: 20px 0 10px 0;
  float: right;
  color: var(--violetCore);
  font-size: 2rem;
  }
  h2 {
      padding: 0;
      margin: 0;
    color: var(--darkBlue);
  }

  .habit-title {
    background-color: var(--violetLight);
    text-align: center;
    color: var(--darkBlue);
    font-size: 1.2rem;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 200;
    margin-left: 0;
  }
}

.habit-progression {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4em;
    line-height: 60px;
    color: var(--violetCore);
  }
  p {
    margin-top: 10px;
    align-self: center;
    font-size: 18px;
  }
}


.habit-category {
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 30px;
  text-align: center;
  i {
    transform: rotate(10deg);
  }
  p {
    font-size: 20px;
    margin-top: 8px;
  }
}

.container-button {
  display: flex;
}

.habit-button {
  width: 50%;
  background: var(--violetCore);
  border: none;
  cursor: pointer;
  color: var(--whiteText);
  display: block;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  transition: background .15s ease;
  &:hover {
    color: white;
    background: var(--violetCore);
    color: var(--yellow);
  }

  
}

.habit-button-giveup {
  width: 50%;
  height: 30px;
  background: var(--violetLight);
  border: none;
  cursor: pointer;
  color: var(--violetCore);
  display: block;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  transition: background .15s ease;
  &:hover {
    color: white;
    background: var(--green);
    color: var(--darkBlue);
  }
}

.progress-bar {
  height: 20px;
  background-color: var(--yellow);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 30px;
}



`;
