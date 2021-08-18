import styled from 'styled-components';

const Title = styled.div`

    font-size: 18px;
    font-family: 'Prompt', sans-serif;

  h1{
      font-size: 64px;
      color: #FFF;
      font-weight: bold;
  }

  p{
    color: #A4A4A4;
  }
`

const Box = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient( #09090D , #2c304a);
    img {
        background: url("/images/robot.jpg") no-repeat center;
        border-radius: 50%;
        border: none;
        height: 400px;
        width: 400px;
    }
`

export default function Capa() {
    return (
        <Box>
            <Title>
                <h1>Digital Bot</h1>
                <p>
                    Web Developer - Portfolio
                </p>
            </Title>
            <img/>
        </Box>
    )
}