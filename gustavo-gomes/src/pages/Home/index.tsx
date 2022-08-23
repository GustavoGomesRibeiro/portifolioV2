import react from 'react';
import {
  Container, 
  Text  
} from './styled';

import Header from '../Container/Header/index';
import Main from '../Container/Main/index';
import Footer from '../Container/Footer/index';

export default function Home() {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>    
    )
}