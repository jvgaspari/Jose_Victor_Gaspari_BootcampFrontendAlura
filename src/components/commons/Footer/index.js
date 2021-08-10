import FooterIcon from "../FooterIcon";
import styled from "styled-components";

const WrapperFooter = styled.div`
    background-color: lightsalmon;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export default function Footer() {
    return (
        <WrapperFooter>
            <FooterIcon/>
        </WrapperFooter>
    )
}