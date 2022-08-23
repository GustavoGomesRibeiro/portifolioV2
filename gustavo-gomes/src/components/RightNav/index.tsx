import react from 'react';
import {
    Container,
    AreaButtons,
    ContentButton,
    Button
} from './styled';

export default function RightNav({open}) {

    return (
        <Container>
          <AreaButtons open={open}>
             <ContentButton>
                 <Button>.about()</Button>
             </ContentButton>

             <ContentButton>
                 <Button>.knowledge()</Button>
             </ContentButton>

             <ContentButton>
                 <Button>.projects()</Button>
             </ContentButton>

             <ContentButton>
                 <Button>.contact()</Button>
             </ContentButton>

           </AreaButtons>
        </Container>
    )
}