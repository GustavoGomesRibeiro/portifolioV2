import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;  
`;

export const AreaContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 425px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const AboutMe = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0px 50px;
    width: 600px;

    @media(max-width: 425px ) {
        width: 375px;
    }
`;

export const Description = styled.p`
    color: ${props => props.theme.fonts.textPrimary};
    font-size: 20px;
    text-align: left;
    font-family: monospace;
`;

export const AreaButton = styled.div`
    margin-top: 50px;

    @media(max-width: 425px ) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
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

export const Img = styled.div`
    margin: 0px 50px;

    @media(max-width: 425px ) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 0px;
    }

    img {
        margin-top: 50px;

        @media(max-width: 425px ) {
            width: 350px;
        }
    }
`;