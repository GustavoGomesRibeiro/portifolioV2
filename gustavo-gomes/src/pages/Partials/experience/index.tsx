import react, { useState } from 'react';
import {
    Container,
    AreaContent,
    WorkExperience,
    AreaTitle,
    Title,
    Bar,
    AreaButton,
    Descriptions
} from './styled';




export default function Experience() {
    // const [ ] = useState();

    const showDescription = () => {
        const getNZN = document.getElementById('nzn');
        const getStarpay = document.getElementById('starpay');
    
        if(getNZN){
            return (
                <Descriptions>NZN</Descriptions>
            )
        }
        console.log('click')
    }
    
    return (
        <Container id="experience">
            <AreaContent>
                <WorkExperience>
                    <AreaTitle>
                        <Title>Experience</Title>
                        <Bar/>
                    </AreaTitle>
                </WorkExperience>

                <AreaButton>
                    <ul>
                        <li>
                            <button id="nzn" onClick={showDescription}>NZN</button>
                        </li>
                        <li>
                            <button id="starpay" onClick={showDescription}>Starpay</button>
                        </li>
                    </ul>
                    {/* <Descriptions></Descriptions> */}
                </AreaButton>
            </AreaContent>
        </Container>
    )
}