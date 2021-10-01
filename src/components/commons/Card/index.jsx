import styled from "styled-components"
import Text from "../../foundation/Text";
import PropTypes from 'prop-types';

const WrapperCard = styled.div`
    box-shadow: 9px 9px 24px 4px rgba(0,0,0,0.59);
    border-radius: 12px;
    width: 300px;
    height: 400px;
    margin-left: 20px;
    margin-top: 32px;
    color: black;
`;

const CardImage = styled.img`
    height: 320px;
    width: 100%;
    border-radius: 12px 12px 0 0;
`;

export default function Card({ title, url }) {
    return (
        <WrapperCard>
            <CardImage
                src={url}
                alt="imagem do projeto"
            />
            <Text
                height="80px"
                display= "flex"
                justifyContent= "center"
                alignItems= "center"
                color="secundary.main"
            >
                {title}
            </Text>
        </WrapperCard>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
}

Card.defaultProps = {
    title: 'undefined',
    url: '',
}