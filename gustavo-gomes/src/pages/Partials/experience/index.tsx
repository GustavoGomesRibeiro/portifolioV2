import react, { useState } from 'react';

import Titles from '../../../components/Title';

import {
    Container,
    AreaContent,
    WorkExperience,
    AreaButton,
    Descriptions
} from './styled';




export default function Experience() {
    const [ nzn, setNzn] = useState(true);
    const [ starpay, setStarpay] = useState(false);

    const showDescriptionNZN = () => {
        setStarpay(false);
        setNzn(true);
    }

    const showDescriptionStarpay = () => {
        setNzn(false)
        setStarpay(true);
    }


    return (
        <Container id="experience">
            <AreaContent>
                <WorkExperience>
                    <Titles title='Experience'/>
                </WorkExperience>

                <AreaButton>
                    <ul>
                        <li>
                            <button id="nzn" autoFocus onClick={showDescriptionNZN}>NZN</button>
                        </li>
                        <li>
                            <button id="starpay" onClick={showDescriptionStarpay}>Starpay</button>
                        </li>
                    </ul>
                    {nzn && (
                        <Descriptions>
                            <h3>Full Stack Developer - NZN</h3>
                            <p>December 2020 - Present</p>
                            <div>
                                <ul>
                                    <li>Criação de novos produtos para a principal vertical Tecmundo.</li>
                                    <li>Monitorar e aprimorar a performance de projetos já entregues em produção.</li>
                                    <li>Principal stack utilizada: C#.</li>
                                    <li>Competências: C# · JavaScript · ReactJs · Windows Azure · Scrum · Node.js · MongoDB · MySQL · GitHub</li>
                                </ul>
                            </div>
                        </Descriptions>
                    )}

                    {starpay && (
                        <Descriptions>
                            <h3>Front End Developer - Starpay</h3>
                            <p>August 2019 - November 2020</p>
                            <div>
                                <ul>
                                    <li>Desenvolvimento de novos portais, atualizações e correções dos mesmos, através das stacks, ReactJs, React Native, AngularJs, NodeJs além de utilizar banco de dados Oracle, Git(Versionamento de Código) e Aws.</li>
                                    <li>Configuração de terminais POS e integração com sistemas externos via APIs RestFul e EDI com arquivos posicionais padrão CNAB.</li>
                                    <li>Competências: React.js · Android · AngularJS · Java · JavaScript · Node.js · CSS · Aws · GitHub</li>
                                </ul>
                            </div>
                        </Descriptions>
                    )}
                </AreaButton>
            </AreaContent>
        </Container>
    )
}