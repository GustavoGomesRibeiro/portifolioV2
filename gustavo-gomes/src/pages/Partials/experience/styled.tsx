import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const AreaContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 425px) {
        display: block;
    }
`;

export const WorkExperience = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0px 50px;
    width: 600px;

    @media (max-width: 425px) {
        width: 400px;
        margin: 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const AreaButton = styled.div`
    display: flex;

    @media (max-width: 425px) {
        flex-direction: column;
    }

    .button-works{
        @media (max-width: 425px) {
            display: flex;
        }        
    }

    ul{
        list-style: none;
    }

    li{}

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

        @media (max-width: 425px ) {
            border-left: none;
            border-top: none;
            border-bottom: 2px solid #233554;
            border-right: none;     
            margin-left: 10px;
        }
    }

    button:hover{
        background: #1d1e1e;
    }

    button:active, button:focus{
        border-left: 2px solid #682ae9;
        background: #1d1e1e;
        transition: 1s;

        @media (max-width: 425px ) {
            border-bottom: 2px solid #682ae9;
            border-left: none;
            background: #1d1e1e;
            transition: 1s;        
        }
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

        @media (max-width: 425px ) {
            font-size: 26px;
            margin-top: 10px;
        }
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

        @media (max-width: 425px) {
            width: 375px;
        }
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