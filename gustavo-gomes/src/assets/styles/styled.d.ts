import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
    
        colors: {
            primary: string;
            secundary: string;
            backgroundPrimary: string;
            backgroundSecundary: string;
        },
        fonts: {
            textPrimary: string,
        },
    }
}