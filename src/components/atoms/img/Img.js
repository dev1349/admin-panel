import React from 'react'
import { styled } from '@mui/material'

const ImgStyled = styled('img', {
    shouldForwardProp: prop => prop !== 'logo',
    name: 'ImgStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ImgWS = ({ path, altText, ...rest }) => {
    return <ImgStyled src={path} alt={altText} {...rest} />
}

export default ImgWS
