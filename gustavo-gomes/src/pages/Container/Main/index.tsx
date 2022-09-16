import react, { useState, useEffect} from 'react';
import { FaGithub, FaArrowCircleUp } from 'react-icons/fa';

import {
    Container,
    AreaTitle,
    AreaSubTitle,
    Title,
    SubTitle,
    Text,
    CurrentJob,
    AreaButton,
    GitHub,
    Icon
} from './styled'

import About from '../../Partials/about/index';
import Experience from '../../Partials/experience/index';
import Knowledge from '../../Partials/knowledge/index';
import Projects from '../../Partials/projects/index';
import Contact from '../../Partials/contact/index';

export default function Main() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const getIdFrontEnd = document.getElementById('front-end');

        const typeWriter = (id: HTMLElement | null) => {
            const splitText = id?.innerHTML.split('');

            id.innerHTML = '';

            splitText.forEach((letters, index) => {
                setTimeout( function() {
                    id.innerHTML += letters
                }, 75 * index) 
            });
        }

        typeWriter(getIdFrontEnd)

    },[]);

    const checkScroll = () => {
        if (!showScroll && window.pageYOffset > 900) {
            setShowScroll(true);
          } else if (showScroll && window.pageYOffset <= 900) {
            setShowScroll(false);
        }        
    }
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    window.addEventListener('scroll', checkScroll);    


    return (
        <>
            <Container>
                <AreaTitle>
                    <Title>
                        Gustavo<label>.Gomes()</label>
                    </Title>

                    <AreaSubTitle>
                        <SubTitle>
                            <Text id='gustavo-gomes'> Gustavo Gomes</Text>
                        </SubTitle>

                        <SubTitle>
                            <CurrentJob id='front-end'>Front-End Developer</CurrentJob>
                        </SubTitle>
                    </AreaSubTitle>
                </AreaTitle>

                <AreaButton>
                    <GitHub href="https://github.com/GustavoGomesRibeiro" target="_blank"> 
                        <FaGithub size={20} color="#fff"/> <label>GitHub</label>
                    </GitHub>
                </AreaButton>

            </Container>
            <About/>
            <Experience/>
            <Knowledge/>
            <Projects/>
            <Contact/>
            <Icon>
                <FaArrowCircleUp
                    className="scrollTop"
                    onClick={scrollTop}
                    style={{ height: 40, color: '#fff', display: showScroll ? 'flex' : 'none' }}
                />
            </Icon>
        </>
    )
}