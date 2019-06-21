import styled from 'styled-components';

export const QuoteContainer = styled.div`
    max-width: 67.666667%;
    margin: 0 auto;
    position: relative;
`;

export const QuoteBox = styled.div`
    position: static;
    @media (min-width: 1600px) {
        position: absolute;
        top: 4rem;
        left: -5rem;
        width: 350px;
    }
    h2 {
        font-size: 1rem;
        padding: 0.5rem;
        line-height: 1.5;
        font-weight: 400;
        &:before {
            content: '“';
            font-family: 'Georgia', serif;
            font-size: 7rem;
            position: absolute;
            color: #2196f3;
            top: -1px;
            left: 5px;
        }
        @media (min-width: 768px) {
            font-size: 1.5rem;
            padding: 3rem 2rem 0.5rem 2rem;
            line-height: 1.5;
            font-weight: 400;
        }
        @media (min-width: 1600px) {
            padding: 3rem 2rem 0.5rem 2rem;
            line-height: 1.5;
            font-weight: 400;
        }
    }
    p {
        padding: 0rem 2rem 0.5rem 2rem;
        font-weight: 300;
    }
`;
