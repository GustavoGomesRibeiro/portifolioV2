import styled from "styled-components";

type open = {
  open: boolean;
};

export const Container = styled.div``;

export const AreaButtons = styled.ul<open>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  z-index: 1;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: #ccc;
    padding-top: 3.5rem;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    display: ${(props) => (props.open ? "flex" : "none")};
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: #1c1c1c;
    padding-top: 3.5rem;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    display: ${(props) => (props.open ? "flex" : "none")};
    z-index: 3;
  }
`;

export const ContentButton = styled.li`
  margin: 30px 25px;
  z-index: 1;
`;

export const Button = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  transition: all 0.5s ease 0s;
  text-decoration: none;
  text-shadow: 2px 3px 0px #898999;

  &:hover {
    color: #682ae9;
  }
`;
