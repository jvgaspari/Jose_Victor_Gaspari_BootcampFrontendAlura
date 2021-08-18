import styled from "styled-components"

const WrapperCard = styled.div`
    background-color: lightcyan;
    box-shadow: 9px 9px 24px 4px rgba(0,0,0,0.59);
    border-radius: 12px;
    width: 300px;
    height: 400px;
    margin-left: 20px;
    margin-top: 32px;
    color: black;
`;

const CardImage = styled.div`
    height: 80%;
    width: 100%;
    background-color: blue;
    border-radius: 12px 12px 0 0;
`;

const CardTitle = styled.p`
    text-align: center;
    font-weight: bold;
`;

export default function Card({ title }) {
    return (
        <WrapperCard>
            <CardImage/>
            <CardTitle>
                {title}
            </CardTitle>
        </WrapperCard>
    )
}