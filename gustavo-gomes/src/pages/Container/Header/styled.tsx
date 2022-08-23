import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;
    height: 100px;

    @media(max-width: 425px) {
        padding: 0px 20px;
    }

    @media(max-width: 768px) {
        padding: 15px 0px;
    }
`;

export const AreaMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 100px;

    @media(max-width: 425px) {
        margin: 0px 0px;
    }
`;

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
    }
`;

export const Logo = styled.div`
    
    label {
        font-family: monospace;
        font-weight: bold;
        font-size: 30px;
        color: #682ae9;
    }

    @media(max-width: 425px) {
        padding: 15px;
    }
`;

export const ContentButton = styled.li`
    margin: 0 10px;
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