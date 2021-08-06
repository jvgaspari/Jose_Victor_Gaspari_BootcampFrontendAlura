import styled from "styled-components"

const WrapperCabecalho = styled.div`
    display: flex;
    justify-content: space-around;
`;

const NavBar = styled.nav`
    display: flex;
    list-style-type: none;
`;

export default function Cabecalho() {
    return (
        <WrapperCabecalho>
            <p>Logo</p>
            <NavBar>
                <li>
                    Sobre mim
                </li>
                <li>
                    Contato
                </li>
            </NavBar>
        </WrapperCabecalho>
    )
}