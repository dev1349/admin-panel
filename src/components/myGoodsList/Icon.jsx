import React from 'react'
import icons from './icons.svg'
import styled, { css } from 'styled-components'

const SvgIcon = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.buttonIconSize || '15px'};
    height: ${props => props.theme.buttonIconSize || '15px'};

    ${props =>
        props.titleIcon &&
        css`
            width: ${props.theme.titleIconSize || '15px'};
            height: ${props.theme.titleIconSize || '15px'};
        `}

    fill: ${props => props.theme.fontTitleColor || 'white'};
`

const Icon = ({ icon, titleIcon }) => {
    return (
        <SvgIcon titleIcon={titleIcon}>
            <use xlinkHref={icons + icon}></use>
        </SvgIcon>
    )
}

export default Icon
