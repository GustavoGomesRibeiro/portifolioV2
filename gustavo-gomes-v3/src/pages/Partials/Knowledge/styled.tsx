import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #282541;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #282541;
  }
`;

export const GeneralContainer = styled.div``;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  padding: 12px 0px;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 2px 3px 0px #898999;

  @media screen and (min-width: 1024px) {
    padding-bottom: 12px;
    color: #fff;
    font-size: 4rem;
    font-weight: 500;
    text-shadow: 2px 3px 0px #898999;
  }
`;

export const SubTitle = styled.h3`
  padding-bottom: 24px 0px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 2px 3px 0px #898999;

  @media screen and (min-width: 1024px) {
    padding-bottom: 24px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-shadow: 2px 3px 0px #898999;
  }
`;

export const ContainerStacks = styled.div`
  grid-column-gap: 24px;
  grid-row-gap: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: 1024px) {
    grid-column-gap: 24px;
    grid-row-gap: 70px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
`;

export const Text = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 2px 3px 0px #898999;
`;
