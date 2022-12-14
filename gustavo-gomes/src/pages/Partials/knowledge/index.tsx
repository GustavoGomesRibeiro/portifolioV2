import react, {useState} from 'react';
import Titles from '../../../components/Title';
import knowledge from '../../../mock/knowledge';
import knowledges from '../../../mock/knowledge';

import {
    Container,
    AreaContent,
    AreaTitle,
    AreaButton,
    Descriptions
} from './styled';

interface Knowledge {
    id: string;
    name: string;
    descriptions: [
        {
            desc_1: string,
            desc_2: string,
            desc_3: string,
        }
    ];
}

export default function Knowledge() {
    const [ filteredKnowledge, setFilteredKnowledge ] = useState<Knowledge[]>([]);

    const showDescription = (id: string) => {
        const knowledgeId = knowledges.filter( i => i.id === id );
        // @ts-ignore: Unreachable code error
        setFilteredKnowledge(knowledgeId);
    }

    return (
        <Container id="knowledge">
            <AreaContent>
                <AreaTitle>
                    <Titles title="Knowledge"/>
                </AreaTitle>

                <AreaButton>
                    <ul className="button-knowledge">
                        {knowledges.map(knowledge => {
                            return (
                                <li key={knowledge.id}>
                                    <button id={knowledge.id} onClick={() => showDescription(knowledge.id)}>{knowledge.name}</button>
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