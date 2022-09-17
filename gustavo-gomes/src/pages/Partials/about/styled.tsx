import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const AreaContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.div`
    margin: 0px 50px;

    img {
        margin-top: 50px;
    }
`;

export const AboutMe = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0px 50px;
    width: 600px;
`;

export const Description = styled.p`
    color: rgb(255, 255, 255);
    font-size: 20px;
    text-align: left;
    font-family: monospace;
`;

export const AreaButton = styled.div`
    margin-top: 50px;
`;

export const Button = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background: rgb(64, 112, 244);
    width: 200px;
    padding: 15px;
`;

export const Text = styled.p`
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;
