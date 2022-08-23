import styled, { keyframes } from 'styled-components'

const Flashes = keyframes`
  0%, 100% {opacity: 1;}

  50% {opacity: 0;}
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: "Roboto Mono", monospace;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const AreaTitle = styled.div``;

export const AreaSubTitle = styled.div`

`;

export const Title = styled.p`

    color: #fff;
    font-family: "Roboto Mono", monospace;
    font-size: 64px;
    font-weight: bold;

    label {
        color: #682ae9;
    }

    @media(max-width: 425px) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.div``;

export const Text = styled.p`
    color: #682ae9;
    font-family: "Roboto Mono", monospace;
    font-size: 26px;
`;


export const CurrentJob = styled.p`
    font-family: "Roboto Mono", monospace;
    font-size: 20px;
    color: #747474;

    &:after {
      content: '|';
      opacity: 1;
      font-weight: bold;
      margin-left: 5px;
      animation-name: ${Flashes};
      animation-duration: .7s;
      animation-iteration-count: infinite;
    }
`;


export const AreaButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const GitHub = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background: rgb(64, 112, 244);
    width: 200px;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;

    label {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
    }
`;

export const Icon = styled.div`
  .scrollTop {
    width: 100%;
    height: 20px;
    bottom: 20px;
    z-index: 1000;
    position: fixed; 
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }

  .scrollTop:hover{
    opacity: 1;
  }
  
  @keyframes fadeIn {
    0 % {
      opacity: 0;
    }
    100 % {
      opacity: 0.5;
    }
  }
`;