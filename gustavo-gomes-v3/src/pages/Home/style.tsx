import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
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

  .scrollTop:hover {
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
