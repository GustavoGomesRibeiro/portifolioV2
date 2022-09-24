import react, { useState, useEffect, useContext} from 'react';
import { FaGithub, FaArrowCircleUp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ContextApi } from '../../../hooks/context';

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
    Icon,
    ExternalLinks,
    Content,
    Bar
} from './styled'

import About from '../../Partials/about/index';
import Experience from '../../Partials/experience/index';
import Knowledge from '../../Partials/knowledge/index';
import Projects from '../../Partials/projects/index';
import Contact from '../../Partials/contact/index';

export default function Main() {
    const { theme } = useContext(ContextApi);

    const [showScroll, setShowScroll] = useState(false);


    useEffect(() => {
        const getIdFrontEnd = document.getElementById('front-end');

        const typeWriter = (id: HTMLElement | null) => {
            const splitText = id?.innerHTML.split('');

            id!.innerHTML = '';

            splitText!.forEach((letters, index) => {
                setTimeout( function() {
                    id!.innerHTML += letters
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
            {/* <Contact/> */}
            <Icon>
                <FaArrowCircleUp
                    className="scrollTop"
                    onClick={scrollTop}
                    style={ theme ? { height: 40, color: '#000', display: showScroll ? 'flex' : 'none' } : { height: 40, color: '#fff', display: showScroll ? 'flex' : 'none' } }
                />
            </Icon>

            <ExternalLinks>
                <Content>
                    <ul>
                        <li><a href="https://github.com/GustavoGomesRibeiro" target="_blank"><FaGithub size={20} color={theme ? '#000' : '#fff'}/></a></li>
                        <li><a href="https://www.linkedin.com/in/gustavoribeirogomes/" target="_blank"><FaLinkedin size={20} color={theme ? '#000' : '#fff'}/></a></li>
                        <li><a href="https://www.instagram.com/_guhsje/" target="_blank"><FaInstagram size={20} color={theme ? '#000' : '#fff'}/></a></li>
                        <Bar/>
                    </ul>
                </Content>
            </ExternalLinks>
        </>
    )
}