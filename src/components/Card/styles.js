import styled from "styled-components";

export const CardHabit = styled.div`
    width: 350px;
    display: flex;

.habit-container {
    width: 300px;
    align-items: baseline;
    justify-content: baseline;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin: 0 auto;
  h3 {
    text-transform: uppercase;
    text-align: center;
    color: var(--darkBlue);
    font-size: 1.2rem;
    padding: 10px;
  }
  h2 {
      padding: 0;
      margin: 0;
    color: var(--darkBlue);
  }

  .habit-title {
    background-color: var(--violetLight);
    text-transform: uppercase;
    text-align: center;
    color: var(--darkBlue);
    font-size: 1.2rem;
    padding: 10px;
  }

}

.habit-progression {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
.habit-description {
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 30px;
  i {
    transform: rotate(10deg);
  }
  p {
    font-size: 20px;
    margin-top: 8px;
  }
}

.habit-button {
  padding: 15px 0 15px 0; 
  width: 100%;
  background: #f6f9fc;
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
    background: var(--violetCore);
  }
}



`;
