import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #282541;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

export const Title = styled.h2`
  padding: 24px 0px;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 2px 3px 0px #898999;

  @media screen and (min-width: 1024px) {
    padding-bottom: 24px;
    color: #fff;
    font-size: 4rem;
    font-weight: 500;
    text-shadow: 2px 3px 0px #898999;
  }
`;

export const ContainerLive = styled.div`
  grid-column-gap: 24px;
  grid-row-gap: 70px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: 1024px) {
    grid-column-gap: 24px;
    grid-row-gap: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Content = styled.div`
  background-color: #282541;
  height: 250px;
  width: 300px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Image = styled.img`
  width: 300px;
  height: 208px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  object-fit: contain;
`;

export const TitleCard = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 160%;
  color: #9ca3af;
  font-weight: 400;
  padding: 10px 0px;
`;

export const Stack = styled.p`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;
export const Divider = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Live = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;
