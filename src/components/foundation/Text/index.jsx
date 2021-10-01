import React from 'react';
import get from "lodash/get";
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
    xlB: css`
        font-size: ${({ theme }) => theme.typographyVariants.xlB.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.xlB.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.xlB.lineHeight};
    `,
    lgB: css`
        font-size: ${({ theme }) => theme.typographyVariants.lgB.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.lgB.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.lgB.lineHeight};
    `,
    lgN: css`
        font-size: ${({ theme }) => theme.typographyVariants.lgN.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.lgN.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.lgN.lineHeight};
    `,
    mdN: css`
        font-size: ${({ theme }) => theme.typographyVariants.mdN.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.mdN.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.mdN.lineHeight};
    `,
    smN: css`
        font-size: ${({ theme }) => theme.typographyVariants.smN.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smN.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smN.lineHeight};
    `,
    xsN: css`
        font-size: ${({ theme }) => theme.typographyVariants.xsN.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.xsN.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.xsN.lineHeight};
    `,
}

const TextModify = css`
    color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
`;

const TextDefault = css`
    color: ${function(props){
        return props.theme.colors.primary.main.color
    }};
`;

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    ${function(props) {
        console.log('props', props)
        if(props.color) {
            return TextModify;
        }
        return TextDefault;
    }}


    ${propToStyle('textAlign')}
    ${propToStyle('margin')}
    ${propToStyle('alignSelf')}
    ${propToStyle('height')}
    ${propToStyle('display')}
    ${propToStyle('justifyContent')}
    ${propToStyle('alignItems')}
`;

export default function Text({ tag, variant, children, ...props }) {
    return (
        <TextBase
            as={tag}
            variant={variant}
            {...props}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}