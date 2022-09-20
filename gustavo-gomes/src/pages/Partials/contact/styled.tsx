import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    @media(max-width: 425px ) {
        display: block;
    }
`;
