import React from 'react'
import { styled } from '@mui/material'

const ImageBorderStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'noSizes' && prop !== 'noBorder',
    name: 'ImageBorderStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})``

const ImageBorder = ({ children, ...rest }) => {
    return <ImageBorderStyled {...rest}>{children}</ImageBorderStyled>
}

export default ImageBorder
