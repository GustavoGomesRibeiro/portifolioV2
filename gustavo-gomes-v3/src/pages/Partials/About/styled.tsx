import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #282541;
`;

export const ContentAboutMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    width: 100%;
    flex-direction: row;
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  margin: 0px 40px;
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: #986dff;
`;

export const ContentSubTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin: 0px 0px;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;

export const Stack = styled.h3`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 16px;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;

export const Image = styled.img`
  height: 400px;
  width: 400px;
  object-fit: contain;
  border-radius: 10px;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #9ca3af;
  line-height: 160%;
  margin: 32px 0px 48px 0px;
`;
