import styled from "styled-components";

export const Bar = styled.div`
    height: 20px;
    width: 210px;
    background-color: var(--yellow);
    border-radius: 8px;
    margin: 0px 20px 10px;
    align-items: center;


    .BarInProgress{
    height: 100%;
    width: ${props => props.completed};
    background-color: ${props => props.color === 'blue' ? "var(--violetCore)" : "var(--green)"};
    text-align: right;
    border-radius: 8px;
    transition: width 1s ease-in-out;
    }

    .Completed {
    padding: 5px;
    color: var(--darkBlue); 
    font-weight: bolder;
    }
`