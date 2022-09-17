import react from 'react';
import snap from '../../../assets/styles/imgs/Snap.png';

import Titles from '../../../components/Title';

import {
    Container,
    AreaContent,
    Img,
    AboutMe,
    Description,
    AreaButton,
    Button,
    Text,
} from './styled';

export default function About() {
    return (
        <Container id="about">
            <AreaContent>
                <AboutMe>
                    <Titles title='About'/>
                    <Description>
                        Meu nome é Gustavo Ribeiro Gomes, tenho 23 anos, moro em Osasco - São Paulo, Atuo na área de desenvolvimento cerca de 2 anos. Atualmente, estou como Desenvolvedor Full Stack, na Empresa NZN, trabalhando diretamente com um dos maiores sites de tecnologia o Tecmundo. Para mais detalhes do perfil segue o meu LinkedIn.
                    </Description>

                    <AreaButton>
                        <Button href="https://www.linkedin.com/in/gustavoribeirogomes/">
                            <Text>LinkedIn</Text>
                        </Button>
                    </AreaButton>
                </AboutMe>
                <Img>
                    <img src={snap} alt="about me"/>
                </Img>
            </AreaContent>
        </Container>
    )
}