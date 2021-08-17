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
    color: var(--violetCore);
    font-size: 1.2rem;
    padding: 10px;
  }
  h2 {
      padding: 0;
      margin: 0;
    color: var(--darkBlue);
  }

}

.price-tag {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    font-size: 4em;
    line-height: 60px;
    color: $darker-blue;
  }

  span {
    align-self: center;
    color: $off-gray;
    font-size: 30px;
    padding: 5px;
  }
  p {
    align-self: center;
    font-size: 18px;
  }
  p:last-child {
    color: $off-gray;
    flex-basis: 100%;
    margin-top: -20px;
    text-align: center;
    margin-bottom: 60px;
  }
}
.messages {
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  svg {
    color: $torquise;
  }
  i {
    transform: rotate(10deg);
  }
  p {
    color: $light-gray;
    font-size: 20px;
    margin-top: 8px;
  }
}

a {
  background: #f6f9fc;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  color: #32325d;
  display: block;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: .025em;
  text-transform: uppercase;
  text-align: center;
  padding: 25px;
  transition: background .15s ease;
  &:hover {
    background: #cfd7df;
  }
}



`;
