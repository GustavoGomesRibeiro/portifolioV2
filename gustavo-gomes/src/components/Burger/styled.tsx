import styled from 'styled-components';


type open = {
    open: boolean;
  };


export const Container = styled.div<open>`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 30px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${props => props.open ? '#fff' : '#fff'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${props => props.open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    
    @media(min-width: 768px) {
        top: 20px;
    }

    @media(min-width: 1024px) {
        display: none;
    }
`;

export const AreaHeader = styled.div`

`;
