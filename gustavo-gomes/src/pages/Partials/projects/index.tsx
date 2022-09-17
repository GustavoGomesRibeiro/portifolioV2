import react from 'react';
import { MdOutlineFolder, FiGithub } from 'react-icons/all';
import Titles from '../../../components/Title';

import {
    Container,
    AreaContent,
    AreaTitle,
    AreaProjects,
    Project

} from './styled';

export default function Projects() {
    return (
        <Container id="projects">
            <AreaContent>
                <AreaTitle>
                    <Titles title="Projects"/>
                </AreaTitle>
                <AreaProjects>
                    <Project>
                        <div className='main'>
                            <div className='header'>
                                <MdOutlineFolder size={40} color="#747474"/>
                                <a href="https://github.com/GustavoGomesRibeiro"><FiGithub size={20} /></a>
                            </div>

                            <div className='body'>
                                <h3>GeoService</h3>
                                <p>Aplicação feita para facilitar a identificar oficinas pela geolocalização.</p>
                            </div>

                            <div className='footer'>
                                <ul>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                </ul>
                            </div>
                        </div>
                    </Project>
                    <Project>
                        <div className='main'>
                            <div className='header'>
                                <MdOutlineFolder size={40} color="#747474"/>
                                <a href="https://github.com/GustavoGomesRibeiro"><FiGithub size={20} /></a>
                            </div>

                            <div className='body'>
                                <h3>GeoService</h3>
                                <p>Aplicação feita para facilitar a identificar oficinas pela geolocalização.</p>
                            </div>

                            <div className='footer'>
                                <ul>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                </ul>
                            </div>
                        </div>
                    </Project>
                    <Project>
                        <div className='main'>
                            <div className='header'>
                                <MdOutlineFolder size={40} color="#747474"/>
                                <a href="https://github.com/GustavoGomesRibeiro"><FiGithub size={20} /></a>
                            </div>

                            <div className='body'>
                                <h3>GeoService</h3>
                                <p>Aplicação feita para facilitar a identificar oficinas pela geolocalização.</p>
                            </div>

                            <div className='footer'>
                                <ul>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                </ul>
                            </div>
                        </div>
                    </Project>
                    <Project>
                        <div className='main'>
                            <div className='header'>
                                <MdOutlineFolder size={40} color="#747474"/>
                                <a href="https://github.com/GustavoGomesRibeiro"><FiGithub size={20} /></a>
                            </div>

                            <div className='body'>
                                <h3>GeoService</h3>
                                <p>Aplicação feita para facilitar a identificar oficinas pela geolocalização.</p>
                            </div>

                            <div className='footer'>
                                <ul>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                    <li>React Native</li>
                                </ul>
                            </div>
                        </div>
                    </Project>
                </AreaProjects>
            </AreaContent>    
        </Container>
    )
}