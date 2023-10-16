import { createGlobalStyle, keyframes } from "styled-components";

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
    
`;

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    animation: ${gradient} 23s ease infinite;
    overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 5px;  
}

body::-webkit-scrollbar-track {
  background: #131120;        
}

body::-webkit-scrollbar-thumb {
  background-color: #682ae9; 
  border-radius: 20px;       

}
`;

export default GlobalStyle;
