import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    #root {
        background-color: ${props => props.theme.color.backgroundPrimary};
        min-height: 100vh;
    
    }
    
    @media(max-width: 425px) {
        #root{
        background-color: #0e1212;
        min-height: 100vh;
        }
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }
`;