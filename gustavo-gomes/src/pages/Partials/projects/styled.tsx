import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


export const AreaContent = styled.div``;

export const AreaTitle = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0px 50px;
    width: 600px;
`;

export const AreaProjects = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
`;

export const Project = styled.li`
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        visibility: visible;
        opacity: 1;
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: 2px;
        background-color: #101929;
        overflow: auto;
    .main{}

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;


        a{
            color:#747474;
        }

        a:hover{
            color: #fff;
            transition: 0.5s;
        }
    }

    .body{
        h3{
            font-size: 24px;
            font-family: monospace;
            font-weight: 600;
            color: #fff;
            padding: 20px 0px;
            opacity: 0.9;
        }

        p{
            font-size: 16px;
            font-family: monospace;
            font-weight: 500;
            color: #a8b2d1;
            padding: 20px 0px;
        }
    }

    .footer{
        ul {
            list-style: none; 
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        li {
            color: #747474;
        }
    }
`;
