import styled from "styled-components/";

export const ExternalLink = styled.div``;

export const Content = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  li {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    margin: 12px 0px;

    @media (max-width: 425px) {
      margin: 0px 20px;
    }

    &:hover {
      transform: translateY(-7px);
    }
  }
`;

export const Bar = styled.div`
  height: 100px;
  width: 1px;
  background-color: #fff;

  @media (max-width: 425px) {
    display: none;
  }
`;
