import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

export const AreaContent = styled.div``;

export const WorkExperience = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0px 50px;
    width: 600px;
`;

export const Title = styled.p`
    font-size: 30px;
    font-family: monospace;
    font-weight: bold;
    color: ${props => props.theme.fonts.title};
    padding: 20px 0px;
`;

export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Bar = styled.div`
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background: #682ae9;
`;

export const AreaButton = styled.div`
    display: flex;

    ul{
        list-style: none;
    }

    li{
        /* margin: 10px; */
    }

    button{
        color: #fff;
        border-left: 2px solid #233554;
        border-top: none;
        border-bottom: none;
        border-right: none;
        width: 100px;
        height: 50px;
        background-color: transparent;
        font-size: 15px;
        font-family: monospace;
        font-weight: bold;
        color: #fff;
    }

    button:hover{
        background: #1d1e1e;
    }

    button:active, button:focus{
        border-left: 2px solid #682ae9;
        background: #1d1e1e;
        transition: 1s;
    }
`;

export const Descriptions = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 20px;

    h3{
        font-size: 30px;
        font-family: monospace;
        font-weight: bold;
        color: #fff;
    }

    p{
        font-size: 16px;
        font-family: monospace;
        font-weight: bold;
        color: #fff;
    }

    div {
        width: 600px;
        margin-top: 10px;
    }

    ul {
        padding: 0px;
        margin: 0px;
        list-style: none;
    }

    li{
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        color: #747474;
        font-size: 16px;
        text-align: left;
        font-family: monospace;
        transition: 0.5s;
    }

    li:hover{
        color: #fff;
        cursor: pointer;
    }

    li::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: red;
    } 
`;