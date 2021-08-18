import styled from "styled-components"

const WrapperCabecalho = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #09090D;
    color: #d7d6d7;
    position: fixed;
    width: 100%;

    h2 {
        font-weight: bold;
        color: #fff;
    }
`;

const NavBar = styled.nav`
    display: flex;
    list-style-type: none;
    li {
        margin-left: 32px;
        cursor: pointer;
    }
`;

export default function Cabecalho() {
    return (
        <WrapperCabecalho>
            <h2>£</h2>
            <NavBar>
                <li>
                    About me
                </li>
                <li>
                    Contact
                </li>
            </NavBar>
        </WrapperCabecalho>
    )
}