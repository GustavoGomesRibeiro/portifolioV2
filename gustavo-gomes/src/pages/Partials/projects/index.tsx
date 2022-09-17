import react from 'react';

import Titles from '../../../components/Title';
import experiences from '../../../mock/experience';

import { MdOutlineFolder, FiGithub } from 'react-icons/all';
import {
    Container,
    AreaContent,
    AreaTitle,
    AreaProjects,
    Project

} from './styled';


interface Experience {
    id: number;
    title: string;
    description: string;
    tech: [
        {
            name: string
        }
    ];
    link: string;

}

export default function Projects() {

    return (
        <Container id="projects">
            <AreaContent>
                <AreaTitle>
                    <Titles title="Projects"/>
                </AreaTitle>
                <AreaProjects>
                    {experiences.map(experience => {
                        return (
                            <Project key={experience.id}>
                                <div className='main'>
                                    <div className='header'>
                                        <MdOutlineFolder size={40} color="#fff"/>
                                        <a href={experience.link}><FiGithub size={20} /></a>
                                    </div>
        
                                    <div className='body'>
                                        <h3>{experience.title}</h3>
                                        <p>{experience.description}</p>
                                    </div>
        
                                    <div className='footer'>
                                        <ul>
                                            {experience.tech.map(t => {
                                                return (
                                                    <li key={Math.random()}>{t.name}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </Project>
                        )
                    })}

                </AreaProjects>
            </AreaContent>    
        </Container>
    )
}