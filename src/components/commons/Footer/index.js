import FooterIcon from "../FooterIcon";
import styled from "styled-components";

const WrapperFooter = styled.div`
    background-color: #09090D;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    i {
        margin-left: 32px;
        color: #fff;
        height: 32px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export default function Footer() {
    return (
        <WrapperFooter>
            <FooterIcon/>
        </WrapperFooter>
    )
}