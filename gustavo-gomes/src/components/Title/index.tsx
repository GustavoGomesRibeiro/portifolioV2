import react from 'react';
import {
    Container,
    AreaTitle,
    Title,
    Bar
} from './styled';

export default function Titles({ title }) {
    return (
        <Container>
            <AreaTitle>
                <Title>{title}</Title>
                <Bar/>
            </AreaTitle>
        </Container>
    )
}