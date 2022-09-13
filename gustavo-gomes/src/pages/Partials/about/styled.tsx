import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    p {
        color: #fff;
    } 
`;

export const AreaContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 0px 50px; */
`;

export const Img = styled.div`
    /* background-color: red;
    width: 100px;
    height: 100px; */
`;

export const AboutMe = styled.div`
    /* background-color: blue; */
    /* width: 100px;
    height: 100px; */

`;

export const Title = styled.div`
`;

export const Description = styled.p`
    color: rgb(255, 255, 255);
    font-size: 20px;
    text-align: left;
    font-family: monospace;
`;

export const AreaButton = styled.div`
    margin-top: 100px;
`;

export const Button = styled.a`
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
