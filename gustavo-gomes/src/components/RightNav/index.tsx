import react, {useState, useEffect} from 'react';
import { BsSun, BsMoon } from 'react-icons/all';

import {
    Container,
    AreaButtons,
    ContentButton,
    Button
} from './styled';


const _getItem = JSON.parse(localStorage.getItem('theme')) || "[]";
// this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

export default function RightNav({open}) {
    const [ themeLocalStorage, setThemeLocalStorage ] = useState(_getItem);
    const [ theme, setTheme ] = useState(false);

    useEffect(() => {
        // localStorage.setItem('theme', JSON.stringify(theme));
    },[themeLocalStorage])

    const changeTheme = () => {
        setTheme(event => !event);
        localStorage.setItem('theme', JSON.stringify(theme));

    }

    return (
        <Container>
          <AreaButtons open={open}>
             <ContentButton>
                 <Button href="#about">.about()</Button>
             </ContentButton>

             <ContentButton>
                 <Button href="#knowledge">.knowledge()</Button>
             </ContentButton>

             <ContentButton>
                 <Button href="#projects">.projects()</Button>
             </ContentButton>

             <ContentButton>
                 <Button href="#contact">.contact()</Button>
             </ContentButton>

             <ContentButton>
                <Button onClick={changeTheme}>
                    {theme ? <BsMoon id="moon" size={30} color="#fff"/> : <BsSun id="sun" size={30} color="#fff"/> }
                </Button>
             </ContentButton>

           </AreaButtons>
        </Container>
    )
}