import react, {useState} from 'react';
import Titles from '../../../components/Title';
import knowledge from '../../../mock/knowledge';
import knowledges from '../../../mock/knowledge';

import {
    Container,
    AreaContent,
    WorkExperience,
    AreaButton,
    Descriptions
} from './styled';

interface Knowledge {
    id: string;
    name: string;
    descriptions: [
        {
            desc_1?: string,
            desc_2?: string,
            desc_3?: string,
            desc_4?: string,
            desc_5?: string,
        }
    ];
}

export default function Knowledge() {
    const [ filteredKnowledge, setFilteredKnowledge ] = useState<Knowledge[]>([]);

    const showDescription = (id) => {
        const knowledgeId = knowledges.filter( i => i.id === id );
        setFilteredKnowledge(knowledgeId);
    }

    return (
        <Container id="knowledge">
            <AreaContent>
                <WorkExperience>
                    <Titles title="Knowledge"/>
                </WorkExperience>

                <AreaButton>
                    <ul className="button-knowledge">
                        {knowledges.map(knowledge => {
                            return (
                                <li key={knowledge.id}>
                                    <button id={knowledge.id} autoFocus onClick={() => showDescription(knowledge.id)}>{knowledge.name}</button>
                                </li>
                            )
                        })}
                    </ul>
                    
                    {filteredKnowledge.map(knowledge => {
                        return (
                            <Descriptions key={knowledge.id}>
                                <h3>{knowledge.name}</h3>
                                <div>
                                    <ul>
                                        {knowledge.descriptions.map(description => {
                                            return (
                                                <div key={Math.random() * 2}>
                                                    <li>{description?.desc_1}</li>
                                                    <li>{description?.desc_2}</li>
                                                    <li>{description?.desc_3}</li>
                                                    <li>{description?.desc_4}</li>
                                                    <li>{description?.desc_5}</li>
                                                </div>
                                            )
                                        })}
                                    </ul>                                    
                                </div>
                            </Descriptions>                            
                        )
                    })}
                </AreaButton>
            </AreaContent>
        </Container>
    )
}