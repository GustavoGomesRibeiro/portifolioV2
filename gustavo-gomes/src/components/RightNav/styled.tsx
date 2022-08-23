import styled from 'styled-components';

export const Container = styled.div``;

export const AreaButtons = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media(max-width: 425px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width:300px;
        background: #ccc;
        padding-top: 3.5rem;
        transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'}
        transition: transform 0.3s ease-in-out;
        display: ${props => props.open ? 'flex' : 'none'} 
    }

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width:300px;
        background: #1c1c1c;
        padding-top: 3.5rem;
        transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'}
        transition: transform 0.3s ease-in-out;
        display: ${props => props.open ? 'flex' : 'none'} 
    }
`;

export const ContentButton = styled.li`
    margin: 30px 25px;
`;

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer; 
    font-family: "Roboto Mono", monospace;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    transition: 0.5s;

    &:hover {
       color: #682ae9;
    }
`;