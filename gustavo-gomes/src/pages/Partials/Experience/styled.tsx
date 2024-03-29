import styled from "styled-components";

export interface Props {
  active: string;
}

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

export const Container = styled.div`
  max-width: 1140px;
`;

export const Title = styled.h2`
  padding: 24px 0;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 2px 3px 0px #898999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    padding-bottom: 24px;
    color: #fff;
    font-size: 4rem;
    font-weight: 500;
    text-shadow: 2px 3px 0px #898999;
  }
`;

export const ContentExperience = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerJobs = styled.li``;

export const Jobs = styled.button<Props>`
  border-left: ${(props) =>
    props.active === "true"
      ? "2px solid #986dff"
      : "2px solid rgb(35, 53, 84)"};
  border-top: none;
  border-bottom: none;
  border-right: none;
  width: 250px;
  height: 180px;
  background-color: transparent;
  font-size: 24px;
  font-family: monospace;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-shadow: 2px 3px 0px #898999;
`;

export const DescriptionJobs = styled.div`
  margin: 0px 20px;
`;

export const ContentAboutCompany = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Ocuppation = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;

export const Time = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 3px 0px #898999;
`;

export const NameCompany = styled.h5`
  font-size: 1.3rem;
  font-weight: 500;
  color: #986dff;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 160%;
  color: #9ca3af;
  font-weight: 400;
`;
