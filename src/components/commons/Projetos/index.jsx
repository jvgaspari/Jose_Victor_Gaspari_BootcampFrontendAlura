import Card from "../Card";
import styled from "styled-components";

const ProjetosWrapper = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( #2c304a , #fff);
    color: #fff;
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default function Projetos() {
    return (
        <ProjetosWrapper>
            <p>My projects</p>
            <CardBox>
                <Card 
                    title="Matrix"
                    url="/images/matrix.jpg"
                />
                <Card 
                    title="Chappie"
                    url="/images/chappie.jpg"
                />
                <Card 
                    title="Wall-e"
                    url="/images/walle.jpg"
                />
            </CardBox>
        </ProjetosWrapper>
    )
}