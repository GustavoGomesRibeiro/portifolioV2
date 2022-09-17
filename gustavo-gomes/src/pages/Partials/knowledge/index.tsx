import react from 'react';
import Titles from '../../../components/Title';

import {
    Container,
    AreaContent,
    WorkExperience,
    AreaButton,
    Descriptions
} from './styled';

export default function Knowledge() {
    return (
        <Container id="knowledge">
            <AreaContent>
                <WorkExperience>
                    <Titles title="Knowledge"/>
                </WorkExperience>

                <AreaButton>
                    <ul>
                        <li>
                            <button id="react" autoFocus onClick={() => {}}>React.js</button>
                        </li>
                        <li>
                            <button id="react-native" onClick={() => {}}>React Native</button>
                        </li>
                        <li>
                            <button id="node" onClick={() => {}}>Node.js</button>
                        </li>
                        <li>
                            <button id="c#" onClick={() => {}}>C#</button>
                        </li>
                        <li>
                            <button id="java" onClick={() => {}}>Java</button>
                        </li>
                        <li>
                            <button id="angular" onClick={() => {}}>Angular</button>
                        </li>
                        <li>
                            <button id="aws" onClick={() => {}}>Aws</button>
                        </li>
                        <li>
                            <button id="azure" onClick={() => {}}>Azure</button>
                        </li>
                        <li>
                            <button id="teste" onClick={() => {}}>Teste unitário/e2e</button>
                        </li>
                        <li>
                            <button id="scrum" onClick={() => {}}>Scrum</button>
                        </li>
                    </ul>
                    {/* {nzn && (
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
                    )} */}
                </AreaButton>
            </AreaContent>
        </Container>
    )
}