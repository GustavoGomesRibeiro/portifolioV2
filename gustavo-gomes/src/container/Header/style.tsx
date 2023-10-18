import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #0f0c1a;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Image = styled.img`
  height: 50px;
  @media screen and (min-width: 1024px) {
    height: 70px;
  }
`;

export const Title = styled.h2`
  margin: 0 30px;
  font-family: monospace;
  font-weight: bold;
  font-size: 30px;
  color: #682ae9;
  text-shadow: 2px 3px 0px #898999;
  @media screen and (min-width: 1024px) {
    margin: 0 30px;
    font-family: monospace;
    font-weight: bold;
    font-size: 40px;
    color: #682ae9;
    text-shadow: 2px 3px 0px #898999;
  }
`;

export const ItemsMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  z-index: 1;
`;

export const Items = styled.li`
  margin: 30px 25px;

  a {
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
  }

  a:hover {
    color: #682ae9;
  }
`;
