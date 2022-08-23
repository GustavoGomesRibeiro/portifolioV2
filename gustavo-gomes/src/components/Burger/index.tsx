import react, {useState} from 'react';
import {
    Container,
    AreaHeader
} from './styled';

import RightNav from '../RightNav/index';


export default function Burger() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen( event => !event)
        // console.log(open, 'burger')
    }

    return (
        <AreaHeader>
            <Container open={open} onClick={handleClick}>
                <div/>
                <div/>
                <div/>
            </Container>
            <RightNav open={open}/>
        </AreaHeader>
    )
}