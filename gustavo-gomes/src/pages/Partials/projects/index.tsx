import react from 'react';
import {
    Container,
    AreaContent,
    AreaProjects,
    AreaTitle,
    Title,
    Bar,

} from './styled';

export default function Projects() {
    return (
        <Container id="projects">
            <AreaContent>
                <AreaProjects>
                    <AreaTitle>
                        <Title>Projects</Title>
                        <Bar/>
                    </AreaTitle>
                </AreaProjects>
            </AreaContent>    
        </Container>
    )
}