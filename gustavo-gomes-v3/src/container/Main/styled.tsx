import styled, { keyframes } from "styled-components";

const Flashes = keyframes`
  0%, 100% {opacity: 1;}

  50% {opacity: 0;}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #0f0c1a,
    #151423,
    #1b1a2d,
    #221f37,
    #282541
  );
`;

export const ContainerApresentation = styled.div`
  width: 100%;
`;

export const ContainerController = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Apresentation = styled.div``;

export const Nome = styled.text`
  color: #fff;
  font-family: "Roboto Mono", monospace;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 3px 0px #898999;

  @media screen and (min-width: 1024px) {
    color: #fff;
    font-family: "Roboto Mono", monospace;
    font-size: 64px;
    font-weight: bold;
    text-shadow: 2px 3px 0px #898999;
  }
`;

export const SobreNome = styled.text`
  color: #682ae9;
  font-family: "Roboto Mono", monospace;
  font-size: 32px;
  font-weight: bold;
  @media screen and (min-width: 1024px) {
    color: #682ae9;
    font-family: "Roboto Mono", monospace;
    font-size: 64px;
    font-weight: bold;
  }
`;

export const SubTitle = styled.div``;

export const GustavoGomes = styled.text`
  color: #682ae9;
  font-family: "Roboto Mono", monospace;
  font-size: 26px;
  font-weight: bold;
  text-shadow: 2px 3px 0px #e2e2e299;
`;

export const FrontEnd = styled.text`
  font-family: "Roboto Mono", monospace;
  font-size: 20px;
  color: #ffff;
  text-shadow: 2px 3px 0px #747474;

  &:after {
    content: "|";
    opacity: 1;
    font-weight: bold;
    margin-left: 5px;
    animation-name: ${Flashes};
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 100px;
  z-index: 1;
  margin: 40px 0px;

  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 400px;
    object-fit: contain;
    border-radius: 200px;
    z-index: 1;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Button = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: rgb(64, 112, 244);
  width: 200px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  z-index: 1;
`;

export const Text = styled.text`
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 10px;
`;
