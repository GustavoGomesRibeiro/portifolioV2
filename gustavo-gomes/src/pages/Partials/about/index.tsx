import react from 'react';
import {
    Container,
    AreaContent,
    Img,
    AboutMe,
    Title,
    Description,
    AreaButton,
    Button,
    Text
} from './styled';

export default function About() {
    return (
        <Container id="about">
            <p>About</p>
            <AreaContent>
                <Img></Img>
                <AboutMe>
                    <Title>About Me</Title>
                    <Description>
                        Meu nome é Gustavo Ribeiro Gomes, tenho 23 anos, moro em Osasco - São Paulo, Atuo na área de desenvolvimento cerca de 2 anos. Atualmente, estou como Desenvolvedor Full Stack, na Empresa NZN, trabalhando diretamente com um dos maiores sites de tecnologia o Tecmundo.Para mais detalhes do perfil segue o meu LinkedIn.
                    </Description>

                    <AreaButton>
                        <Button href="https://www.linkedin.com/in/gustavoribeirogomes/">
                            <Text>LinkedIn</Text>
                        </Button>
                    </AreaButton>
                </AboutMe>
            </AreaContent>
        </Container>
    )
}