import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


export const AreaContent = styled.div``;

export const AreaProjects = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0px 50px;
    width: 600px;
`;

export const Title = styled.p`
    font-size: 30px;
    font-family: monospace;
    font-weight: bold;
    color: ${props => props.theme.fonts.title};
    padding: 20px 0px;
`;

export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Bar = styled.div`
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background: #682ae9;
`;