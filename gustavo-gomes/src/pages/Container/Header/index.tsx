import react from 'react'
import {
    Container,
    AreaMenu,
    AreaButtons,
    Logo,
    ContentButton,
    Button
} from './styled';

import Burger from '../../../components/Burger/index';


export default function Header() {
    return (
        <Container>
            <AreaMenu>
                <Logo><label>.Gomes()</label></Logo>
                <Burger/>
            </AreaMenu>
        </Container>
    )
}
