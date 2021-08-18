import Card from "../Card";
import SectionTitle from "../SectionTitle";
import styled from "styled-components";

const Projetos = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( #2c304a , #fff);
    color: #fff;
    font-family: 'Prompt', sans-serif;
`;

const SectionCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default function WrapperProjetos() {
    return (
        <Projetos>
            <SectionTitle/>
            <SectionCards>
                <Card title="Alpha"/>
                <Card title="Beta"/>
                <Card title="Gamma"/>
            </SectionCards>
        </Projetos>
    )
}