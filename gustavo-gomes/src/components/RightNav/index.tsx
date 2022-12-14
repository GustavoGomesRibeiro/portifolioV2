import react, {useContext} from 'react';
import { BsSun, BsMoon } from 'react-icons/all';
import { ContextApi } from '../../hooks/context';

import {
    Container,
    AreaButtons,
    ContentButton,
    Button
} from './styled';

interface Props {
    open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
    const { theme, setTheme } = useContext(ContextApi);


    const changeTheme = () => {
        if(!theme){
            setTheme(true);
        } else {
            setTheme(false);
        }
    }
    

    return (
        <Container>
          <AreaButtons open={open}>
             <ContentButton>
                 <Button href="#about">.about()</Button>
             </ContentButton>

             <ContentButton>
                 <Button href="#experience">.experience()</Button>
             </ContentButton>

             <ContentButton>
                 <Button href="#knowledge">.knowledge()</Button>
             </ContentButton>

             <ContentButton>
                 <Button href="#projects">.projects()</Button>
             </ContentButton>

             {/* <ContentButton>
                 <Button href="#contact">.contact()</Button>
             </ContentButton> */}

             <ContentButton>
                <Button onClick={changeTheme}>
                    {theme ? <BsMoon id="moon" size={30} color="#fff"/> : <BsSun id="sun" size={30} color="#fff"/> }
                </Button>
             </ContentButton>

           </AreaButtons>
        </Container>
    )
}

export default RightNav;