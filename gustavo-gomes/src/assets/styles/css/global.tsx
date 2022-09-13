import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    #root {
        background-color: ${props => props.theme.colors.backgroundPrimary};
        min-height: 100vh;
    }

    @media(max-width: 425px) {
        #root{
        background-color: ${props => props.theme.colors.backgroundPrimary};
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