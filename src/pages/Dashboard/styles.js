import styled from 'styled-components'

export const PContainer = styled.div`
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 30px;
    display: flex;
    color: var(--violetCore);
    font-size: 1.2rem;
    align-items: center;

        button {
            margin-left: 20px;
            width: 150px;
            height: 40px;
            font-size: 1rem;
        }

        @media only screen and (min-width: 320px) {

        }
`;

export const CarouselContainer = styled.div`
    margin-left: 30px;
    margin-right: 30px;
`;