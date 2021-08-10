import styled from "styled-components"

const WrapperCard = styled.div`
    background-color: lightcyan;
    width: 300px;
    height: 400px;
    margin-left: 20px;
`;

const CardImage = styled.div`
    height: 80%;
    width: 100%;
    background-color: blue;
`;

const CardTitle = styled.p`
    text-align: center;
`;

export default function Card() {
    return (
        <WrapperCard>
            <CardImage/>
            <CardTitle>
                Projetinho
            </CardTitle>
        </WrapperCard>
    )
}