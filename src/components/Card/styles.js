import styled from "styled-components";

export const CardHabit = styled.div`
    width: 200;
    display: flex;

.habit-container {
width: 250px;
align-items: center;
justify-content: center;
background-color:rgba(178, 185, 255, 0.5);
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
border-radius: 10px;
margin: 20px;
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

hr {
  margin-right: 20px;
  margin-left: 20px;
  border: 0,5px solid gray;
}

  .habit-title {
    margin: 20px 0 10px 20px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 250;
  }
}

.habit-difficulty {
  margin: 10px 0 10px 20px;
  font-size: 1.2rem;
}


.habit-progression {
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 4em;
    line-height: 60px;
    color: var(--violetCore);
  }
  p {
    margin: 10px 0 10px 20px;
    font-size: 1.2rem;
  }
}


.habit-category {
  display: flex;
  flex-direction: column;
  i {
    transform: rotate(10deg);
  }
  p {
    margin: 10px 0 10px 20px;
    font-size: 1.2rem;
  }
}

.container-button {
  display: flex;
}

.habit-button {
  border-bottom-right-radius: 10px;
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
  border-bottom-left-radius: 10px;
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
  margin: 0 20px 20px 20px;
}

.progress-bar-blue {
  height: 20px;
  background-color: var(--violetCore);
  margin: 0 20px 20px 20px;
}



`;
