import Card from "../Card";
import SectionTitle from "../SectionTitle";
import styled from "styled-components";

const Projetos = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightcoral;
`;

const SectionCards = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function WrapperProjetos() {
    return (
        <Projetos>
            <SectionTitle/>
            <SectionCards>
                <Card/>
                <Card/>
                <Card/>
            </SectionCards>
        </Projetos>
    )
}