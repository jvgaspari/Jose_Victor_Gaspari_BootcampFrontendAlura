import styled from 'styled-components';
import Text from '../../foundation/Text';

const Title = styled.div`

    font-size: 18px;
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
                <Text
                >
                    Digital Bot
                </Text>
                <Text
                >
                    Fullstack Web Developer - Portfolio
                </Text>
            </Title>
            <img/>
        </Box>
    )
}