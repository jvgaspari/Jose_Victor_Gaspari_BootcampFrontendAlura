import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("/images/planta.svg") no-repeat right bottom;
`

export default function Capa() {
    return (
        <Box>
            <Title>
                Mary Elizabeth
            </Title>
            <p>
                Portfolio
            </p>
        </Box>
    )
}