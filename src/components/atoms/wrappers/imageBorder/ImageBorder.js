import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const ImageBorderStyled = createStyled('ImageBorderStyle', 'div', ['noSizes', 'noBorder'])

const ImageBorder = ({ children, ...rest }) => {
    return <ImageBorderStyled {...rest}>{children}</ImageBorderStyled>
}

export default ImageBorder
